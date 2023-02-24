'use client';
import axios from 'axios';
import {
	BusinessLicenseTextField,
	DayOffBtn,
	PostcodePopupOpenBtn,
	RadioBtn,
	StoreEditCompletionConfirmModal,
	StoreImageBtn,
	StoreRegistrationStepChangeConfirmModal,
	StoreResistrationSmallBtn,
	TextField,
	TimePicker,
} from 'components/feature';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import {
	businessHourDays,
	checkEmptyInputError,
	extractBusinessLicenseExceptHyhpen,
	makeBusinessHourData,
	makeImgPath,
	makeStoreAddress,
	refineStoreBusinessHoursStringToArray,
	saveStep2UserInput,
} from 'core/storeRegistrationService';
import { useGetStore } from 'hooks/api/store/useGetStore';
import { patchStore } from 'hooks/api/store/usePatchStore';
import { postStore } from 'hooks/api/store/usePostStore';
import { patchManager } from 'hooks/api/user/usePatchManager';
import { useS3Upload } from 'next-s3-upload';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { StoreDefaultImg } from 'public/static/images';
import { ChangeEvent, FormEvent, RefObject, useEffect, useRef, useState } from 'react';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { step1RequestStore } from 'store/actions/step1Store';
import { step2ErrorStore, step2RequestStore } from 'store/actions/step2Store';
import { theme } from 'styles';
import style from 'styles/style';
interface IBusinessLicenseStatusResponse {
	match_cnt: number;
	request_cnt: number;
	status_code: string;
	data: Array<{
		b_no: string;
		b_stt: '01' | '02' | '03';
		b_stt_cd: '01' | '02' | '03';
		tax_type: string;
		tax_type_cd: '1' | '2' | '3' | '4' | '5' | '6' | '7';
		end_dt: string;
		utcc_yn: 'Y' | 'N';
		tax_type_change_dt: string;
		invoice_apply_at: string;
	}>;
}

const Step2 = () => {
	const router = useRouter();
	const query = useSearchParams();
	const num = /[-0-9]/;
	const { data } = useGetStore(query?.get('storeId'));
	const [isData, setIsData] = useState(false);
	const [businessHourValues, setBusinessHourValues] = useState<Array<{ day: string; time: string | null }>>([]);
	const { step2Request, setStep2Request } = step2RequestStore();
	const {
		name,
		notice,
		storeZonecode,
		basicAddress,
		addressDetail,
		imgPath,
		instaAccount,
		callNumber,
		registrationNumber,
		setInputState,
		setInitialValue,
		setInputValue,
	} = step2ErrorStore();
	const { modalKey, changeModalKey } = useModalStore();
	const [complete, setComplete] = useState({ managerId: -1, storeId: -1 });
	const [storePostcodeInputs, setStorePostcodeInputs] = useState({
		address: '', // 기본 주소
		detailAddress: '', // 상세 주소
	});
	const businessLicenseInputRef = useRef() as RefObject<HTMLInputElement>;
	const dayOffRef = useRef<null[] | Array<RefObject<HTMLButtonElement>> | HTMLButtonElement[]>([]);
	const [dayOffStatus, setDayOffStatus] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
	const [storeCallNumber, setStoreCallNumber] = useState('');
	const [selectedStoreImageBtn, setSelectedStoreImageBtn] = useState(imgPath.value[0] ? 'registrationImage' : 'defaultImage');
	const [clientStoreImageURL, setClientStoreImageURL] = useState('');
	const [S3ImagePath, setS3ImagePath] = useState(imgPath.value[0] ?? '');
	const [selectedBusinessHourBtn, setSelectedBusinessHourBtn] = useState('weekDaysWeekEnd');
	const { step1Request } = step1RequestStore();
	const { uploadToS3 } = useS3Upload();

	const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emptyInput = checkEmptyInputError(e.currentTarget.step2, setInputState);
		if (e.currentTarget.step2[0].value !== '' && registrationNumber.isError === 'normal') {
			setInputState('registrationNumber', 'notClicked');
		}
		if (registrationNumber.isError === 'fail' || registrationNumber.isError === 'notClicked') {
			const registrationNumComponent: HTMLElement | null = document.getElementById('registrationNumber');
			if (registrationNumComponent && registrationNumComponent !== null) {
				window.scrollTo({
					top: registrationNumComponent.scrollHeight - 140 + window.scrollY,
					behavior: 'smooth',
				});
			}
			return;
		} else if (emptyInput[0] !== 0 && emptyInput[2] !== '' && document.getElementById(emptyInput[2].toString())) {
			const emptyComponent: HTMLElement | null = document.getElementById(emptyInput[2].toString());
			if (emptyComponent && emptyComponent !== null) {
				window.scrollTo({
					top: emptyComponent.getBoundingClientRect().top - 140 + window.scrollY,
					behavior: 'smooth',
				});
			}
			return;
		}

		await saveStep2UserInput(e.currentTarget.step2, setStep2Request);
		await makeBusinessHourData(dayOffRef, selectedBusinessHourBtn, setStep2Request);
		await makeStoreAddress(storePostcodeInputs, setStep2Request);
		await handleFindCoords(storePostcodeInputs.address);
		await makeImgPath(selectedStoreImageBtn, S3ImagePath, setStep2Request);

		if (query.toString() === '') changeModalKey(MODAL_KEY.ON_STORE_REGISTRATION_STEP_CHANGE_CONFIRM_MODAL);
		else changeModalKey(MODAL_KEY.ON_STORE_EDIT_COMPLETION_CONFIRM_MODAL);
	};

	const submitInputs = async () => {
		const step1Response = await patchManager(step1Request);
		const step2Response = await postStore(step2Request);
		setComplete({ managerId: step1Response?.id ?? -1, storeId: step2Response.storeId });
		router.push(`/registration/step3?id=${step2Response.storeId}`);
	};
	const submitEditInputs = async () => {
		const step2EditResponse = await patchStore({ ...step2Request, id: Number(query.get('storeId')) });
		router.push(`/mypage/store`);
	};
	const handleSelectedStoreImageBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedStoreImageBtn === e.target.value) return;
		setSelectedStoreImageBtn(e.target.value);
		if (e.target.value === 'defaultImage') {
			setClientStoreImageURL('');
		}
	};
	const handleSelectedBusinessHourBtn = (buttonName: string) => {
		if (selectedBusinessHourBtn === buttonName) return;
		setSelectedBusinessHourBtn(buttonName);
	};
	const handleExtractedPostCode = (extractedPostcode: string[]) => {
		const [zonecode, address] = extractedPostcode;
		if (address !== '') setInputState('basicAddress', 'normal');
		setStorePostcodeInputs({
			...storePostcodeInputs,
			address,
		});
	};
	const handleStoreAddressDetailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStorePostcodeInputs({
			...storePostcodeInputs,
			detailAddress: event.target.value,
		});
	};
	const handleTimePickerInput = (arrIndex: number) => {
		setDayOffStatus({ ...dayOffStatus, [arrIndex]: !dayOffStatus[arrIndex] });
	};
	const handleBusinessLicenseStatusCheck = async () => {
		if (!businessLicenseInputRef.current) return;

		const businessLicenseStatusResponse = await axios.post<IBusinessLicenseStatusResponse>(
			`${process.env.NEXT_PUBLIC_NTS_API_BASE_URL}/status${
				process.env.NEXT_PUBLIC_NTS_API_KEY && `?serviceKey=${process.env.NEXT_PUBLIC_NTS_API_KEY}`
			}`,
			{
				b_no: [extractBusinessLicenseExceptHyhpen(businessLicenseInputRef.current?.value)],
			},
		);

		const { b_stt_cd, tax_type } = businessLicenseStatusResponse.data.data[0];

		if (tax_type === '국세청에 등록되지 않은 사업자등록번호입니다.') {
			setInputState('registrationNumber', 'fail');
		}
		if (b_stt_cd === '01') {
			setInputState('registrationNumber', 'success');
		}
		businessLicenseInputRef.current.blur();
	};
	const handleUploadToClient = async (e: ChangeEvent<HTMLInputElement>) => {
		if (clientStoreImageURL) URL.revokeObjectURL(clientStoreImageURL);
		if (e.target.files !== null) {
			setClientStoreImageURL(URL.createObjectURL(e.target.files[0]));
			const { url } = await uploadToS3(e.target.files[0]);
			setS3ImagePath(url);
		}
		setInputState('imgPath', 'normal');
	};

	const handleFindCoords = async (storeAddress: string) => {
		await axios
			.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${storeAddress}`, {
				headers: {
					Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_MAP_REST_KEY}`, // REST API 키
				},
			})
			.then((res) => {
				const location = res.data.documents[0];
				setStep2Request('longitude', location.address.x);
				setStep2Request('latitude', location.address.y);
			});
	};

	useEffect(() => {
		if (data && !isData && query.get('storeId') !== null) {
			setInitialValue(data);
			setIsData(true);
			if (data?.callNumber !== '' && data?.callNumber !== null) setStoreCallNumber(data.callNumber);
			if (data?.businessHour !== null && data?.businessHour !== '') {
				setBusinessHourValues(refineStoreBusinessHoursStringToArray(data?.businessHour));
				setSelectedBusinessHourBtn('eachDays');
			}
			if (data?.imgStore?.length > 0 && data?.imgStore !== null && data?.imgStore !== undefined) {
				setClientStoreImageURL(data?.imgStore[0]?.path ?? '');
				setS3ImagePath(data?.imgStore[0]?.path ?? '');
				setSelectedStoreImageBtn('registerImage');
			}
			if (data?.address !== '' && data?.address !== null) {
				setStorePostcodeInputs({
					address: data?.address?.split('#')[0] ?? '',
					detailAddress: data?.address?.split('#')[1] ?? '',
				});
			}
			if (data?.callNumber !== '' && data?.callNumber !== null) setStoreCallNumber(data?.callNumber ?? '');
		}
	}, [data]);
	useEffect(() => {
		if (businessHourValues.length > 0) {
			for (let i = 0; i < businessHourValues.length; i++) {
				if (businessHourValues[i].time === null) {
					setDayOffStatus({ ...dayOffStatus, [i + 1]: true });
				}
			}
		}
	}, [businessHourValues]);

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<StyledLayout.TextFieldSection>
					<label htmlFor="registrationNumber">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							사업자번호
						</Typography>
					</label>
					<StyledLayout.FlexBox gap={'6px'}>
						<BusinessLicenseTextField
							businessLicenseTextFieldRef={businessLicenseInputRef}
							name="step2"
							id="registrationNumber"
							key={registrationNumber.value}
							value={registrationNumber.value}
							inputFlag={registrationNumber.isError}
							onFocus={() => setInputState('registrationNumber', 'normal')}
							placeholder="‘-‘ 를 빼고 숫자만 입력해주세요"
						/>
						<StoreResistrationSmallBtn type="button" width={{ width: '106px' }} onClick={handleBusinessLicenseStatusCheck}>
							번호 조회
						</StoreResistrationSmallBtn>
					</StyledLayout.FlexBox>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="name">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							상호
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="상호를 입력해주세요"
						name="step2"
						id="name"
						onFocus={() => setInputState('name', 'normal')}
						inputFlag={name.isError}
						width="320px"
						placeholder="상호명을 입력해주세요"
						defaultValue={name.value}
						key={name.value}
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="callNumber">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							매장 전화번호
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="매장 전화번호를 입력해주세요"
						name="step2"
						id="callNumber"
						onFocus={() => setInputState('callNumber', 'normal')}
						inputFlag={callNumber.isError}
						width="320px"
						placeholder="‘-‘ 를 포함하여 입력해주세요"
						value={storeCallNumber}
						onChange={(e) => {
							if (!num.test(e.target.value) && e.target.value !== '') return;
							setStoreCallNumber(e.target.value);
						}}
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="addressDetail">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							매장 주소
						</Typography>
					</label>
					<StyledLayout.FlexBox gap="6px">
						<TextField
							emptyErrorMessage="매장 주소를 입력해주세요"
							readOnly={true}
							inputFlag={basicAddress.isError}
							name="step2"
							id="basicAddress"
							width="560px"
							placeholder="입력하기"
							value={storePostcodeInputs.address}
						/>
						<PostcodePopupOpenBtn onExtractedPostCode={handleExtractedPostCode} />
					</StyledLayout.FlexBox>
					<TextField
						emptyErrorMessage="상세 주소를 입력해주세요"
						onFocus={() => setInputState('addressDetail', 'normal')}
						inputFlag={addressDetail.isError}
						value={storePostcodeInputs.detailAddress}
						name="step2"
						id="addressDetail"
						placeholder="(필수) 상세주소를 입력해주세요"
						width="560px"
						onChange={handleStoreAddressDetailChange}
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						매장 사진
					</Typography>
					<StyledLayout.FlexBox style={{ paddingTop: '8px', paddingBottom: '12px' }}>
						<RadioBtn
							name="storeImage"
							value="defaultImage"
							onChange={handleSelectedStoreImageBtn}
							defaultChecked={imgPath.value[0] === ''}
						/>
						<StyledLayout.FlexBox style={{ paddingLeft: '8px' }} gap="8px" flexDirection="column">
							<label htmlFor="defaultImage">
								<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_006}>
									기본 이미지 등록
								</Typography>
							</label>
							<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
								가게 사진이 없다면 기본 이미지로 등록해드려요
							</Typography>
							{selectedStoreImageBtn === 'defaultImage' && (
								<Image src={StoreDefaultImg} alt="기본가게이미지" width={343} height={160} style={{ paddingTop: '8px' }} />
							)}
						</StyledLayout.FlexBox>
					</StyledLayout.FlexBox>
					<StyledLayout.FlexBox>
						<RadioBtn
							onClick={() => setInputState('imgPath', 'normal')}
							name="storeImage"
							value="registerImage"
							onChange={handleSelectedStoreImageBtn}
							defaultChecked={imgPath.value[0] !== ''}
						/>
						<StyledLayout.FlexBox style={{ paddingLeft: '8px' }} gap="8px" flexDirection="column">
							<label htmlFor="registerImage">
								<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_006}>
									직접 등록
								</Typography>
							</label>
							<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
								준비하신 이미지로 가게 사진을 등록해드려요
							</Typography>
							<StyledLayout.EmptyBoxDivider height="0" />
							{selectedStoreImageBtn === 'registerImage' && (
								<StoreImageBtn
									name="step2"
									id="imgPath"
									deleteImage={() => setClientStoreImageURL('')}
									onChange={handleUploadToClient}
									value={clientStoreImageURL}
									clientStoreImageURL={clientStoreImageURL}
									inputFlag={imgPath.isError}
								/>
							)}
						</StyledLayout.FlexBox>
					</StyledLayout.FlexBox>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="instaAccount">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							홍보 채널 (선택)
						</Typography>
					</label>
					<TextField
						placeholder="링크를 입력해주세요"
						name="step2"
						key={instaAccount}
						defaultValue={instaAccount}
						id="instaAccount"
						inputFlag="normal"
						width="320px"
					/>
					<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						인스타그램, 블로그, 홈페이지 중 가장 활발히 사용하고 있는 채널 하나를 선택해서 링크 입력해주세요
					</Typography>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						운영 시간
					</Typography>
					<StyledLayout.FlexBox gap="24px" style={{ padding: '4px 0' }}>
						<StyledLayout.FlexBox gap="8px" alignItems="center">
							<RadioBtn
								name="businessHour"
								value="weekDaysWeekEnd"
								onClick={() => handleSelectedBusinessHourBtn('weekDaysWeekEnd')}
								defaultChecked={businessHourValues.length === 0}
							/>
							<label htmlFor="weekDaysWeekEnd">
								<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_006}>
									평일 / 주말 달라요
								</Typography>
							</label>
						</StyledLayout.FlexBox>
						<StyledLayout.FlexBox gap="8px" alignItems="center">
							<RadioBtn
								defaultChecked={businessHourValues.length !== 0}
								name="businessHour"
								value="eachDays"
								onClick={() => handleSelectedBusinessHourBtn('eachDays')}
							/>
							<label htmlFor="eachDays">
								<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_006}>
									요일별로 달라요
								</Typography>
							</label>
						</StyledLayout.FlexBox>
					</StyledLayout.FlexBox>
					{selectedBusinessHourBtn === 'weekDaysWeekEnd' ? (
						<StyledLayout.FlexBox flexDirection="column" gap="12px">
							<StyledLayout.FlexBox>
								<StyledLayout.FlexBox flexDirection="column" gap="6px">
									<Typography variant="h3" aggressive="button_001" color={theme.colors.gray_007}>
										평일
									</Typography>
									<Typography variant="h4" aggressive="body_oneline_004" color={theme.colors.gray_005} margin="0 20px 0 0">
										(월~금)
									</Typography>
								</StyledLayout.FlexBox>
								<TimePicker dayOffRef={(el) => (dayOffRef.current[0] = el)} name="weekDays" />
							</StyledLayout.FlexBox>
							<StyledLayout.FlexBox>
								<StyledLayout.FlexBox flexDirection="column" gap="6px">
									<Typography variant="h3" aggressive="button_001" color={theme.colors.gray_007}>
										주말
									</Typography>
									<Typography variant="h4" aggressive="body_oneline_004" color={theme.colors.gray_005} margin="0 20px 0 0">
										(토~일)
									</Typography>
								</StyledLayout.FlexBox>
								<TimePicker dayOffRef={(el) => (dayOffRef.current[1] = el)} name="WeekEnd" disabled={dayOffStatus[0]} />
								<DayOffBtn dayOff={dayOffStatus[0]} onClick={() => handleTimePickerInput(0)} style={{ marginLeft: '6px' }} />
							</StyledLayout.FlexBox>
						</StyledLayout.FlexBox>
					) : (
						<StyledLayout.FlexBox flexDirection="column" gap="12px">
							{businessHourDays.map(({ id, day }, idx) => {
								return (
									<StyledLayout.FlexBox key={id} alignItems="center">
										<StyledLayout.FlexBox flexDirection="column" gap="6px">
											<Typography variant="h3" aggressive="button_001" color="gray_007" margin="0 20px 0 0">
												{day}
											</Typography>
										</StyledLayout.FlexBox>
										<TimePicker
											value={
												businessHourValues.length > 0
													? businessHourValues[idx].time !== null
														? {
																startHour: businessHourValues[idx].time?.split('~')[0]?.substring(0, 2)?.padStart(2, '0'),
																startMinutes: businessHourValues[idx].time?.split('~')[0]?.substring(4)?.padStart(2, '0'),
																endHour: businessHourValues[idx].time?.split('~')[1]?.substring(0, 2)?.padStart(2, '0'),
																endMinutes: businessHourValues[idx].time?.split('~')[0]?.substring(4)?.padStart(2, '0'),
														  }
														: {
																startHour: '10',
																startMinutes: '00',
																endHour: '22',
																endMinutes: '00',
														  }
													: undefined
											}
											dayOffRef={(el) => (dayOffRef.current[id] = el)}
											disabled={dayOffStatus[id - 1]}
										/>
										<DayOffBtn
											dayOff={dayOffStatus[id - 1]}
											onClick={() => handleTimePickerInput(id - 1)}
											style={{ marginLeft: '6px' }}
										/>
									</StyledLayout.FlexBox>
								);
							})}
						</StyledLayout.FlexBox>
					)}
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="notice">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							휴무일
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="휴무일을 입력해주세요"
						name="step2"
						id="notice"
						inputFlag={notice.isError}
						onFocus={() => setInputState('notice', 'normal')}
						width="320px"
						key={notice.value}
						defaultValue={notice.value}
						placeholder="휴무일을 자유롭게 입력해주세요"
					/>
					<StyledLayout.FlexBox style={{ paddingTop: '4px' }}>
						<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							ex) 연중 무휴, 매주 토요일, 매달 둘째 및 넷째주 토요일 등
						</Typography>
					</StyledLayout.FlexBox>
				</StyledLayout.TextFieldSection>
				<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
					{query.get('isReady') === null ? (
						<LargeBtn type="submit" style={style.btnStyle.primary_btn_002}>
							다음단계
						</LargeBtn>
					) : (
						<LargeBtn type="submit" style={style.btnStyle.primary_btn_002}>
							수정완료
						</LargeBtn>
					)}
				</StyledLayout.FlexBox>
			</form>
			{modalKey === MODAL_KEY.ON_STORE_REGISTRATION_STEP_CHANGE_CONFIRM_MODAL && (
				<StoreRegistrationStepChangeConfirmModal onCancel={() => changeModalKey(MODAL_KEY.OFF)} onConfirm={submitInputs} />
			)}
			{modalKey === MODAL_KEY.ON_STORE_EDIT_COMPLETION_CONFIRM_MODAL && (
				<StoreEditCompletionConfirmModal onCancel={() => changeModalKey(MODAL_KEY.OFF)} onConfirm={submitEditInputs} />
			)}
		</>
	);
};

export default Step2;
