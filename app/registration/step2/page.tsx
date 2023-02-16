'use client';

import { RefObject, MouseEvent, useState, useRef, FormEvent, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { LargeBtn, PrivateRoute, StyledLayout, Typography } from 'components/shared';
import {
	TextField,
	PostcodePopupOpenBtn,
	BusinessLicenseTextField,
	StoreResistrationSmallBtn,
	RadioBtn,
	StoreImageBtn,
	TimePicker,
	DayOffBtn,
	StoreRegistrationStepChangeConfirmModal,
} from 'components/feature';
import {
	businessHourDays,
	checkEmptyInputError,
	extractBusinessLicenseExceptHyhpen,
	makeBusinessHourData,
	makeImgPath,
	makeStoreAddress,
	saveStep2UserInput,
} from 'core/storeRegistrationService';
import style from 'styles/style';
import { theme } from 'styles';
import { StoreDefaultImg } from 'public/static/images';
import { useS3Upload } from 'next-s3-upload';
import { patchManager } from 'hooks/api/user/usePatchManager';
import { step1RequestStore } from 'store/actions/step1Store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { step2ErrorStore, step2RequestStore } from 'store/actions/step2Store';
import { postStore } from 'hooks/api/store/usePostStore';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { getStore, Store } from 'hooks/api/store/useGetStore';
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
		changeNormal,
		changeError,
		setInitialValue,
	} = step2ErrorStore();
	const { modalKey, changeModalKey } = useModalStore();
	const [complete, setComplete] = useState({ managerId: -1, storeId: -1 });
	const [storePostcodeInputs, setStorePostcodeInputs] = useState({
		zonecode: storeZonecode.value ?? '', // 우편번호
		address: basicAddress.value ?? '', // 기본 주소
		detailAddress: addressDetail.value ?? '', // 상세 주소
	});
	const businessLicenseInputRef = useRef() as RefObject<HTMLInputElement>;
	const dayOffRef = useRef<null[] | Array<RefObject<HTMLButtonElement>> | HTMLButtonElement[]>([]);
	const [dayOffStatus, setDayOffStatus] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
	const [businessLicenseStatus, setBusinessLicenseStatus] = useState<'normal' | 'success' | 'error' | 'notClicked'>('normal');
	const [selectedStoreImageBtn, setSelectedStoreImageBtn] = useState('defaultImage');
	const [clientStoreImageURL, setClientStoreImageURL] = useState(imgPath.value[0] ?? null);
	const [S3ImagePath, setS3ImagePath] = useState(imgPath.value[0] ?? '');
	const [selectedBusinessHourBtn, setSelectedBusinessHourBtn] = useState('weekDaysWeekEnd');
	const { step1Request } = step1RequestStore();

	const { uploadToS3 } = useS3Upload();
	const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO: 서버로직 구현
		const emptyInput = checkEmptyInputError(e.currentTarget.step2, changeError);
		// if (e.currentTarget.step2[0].value !== '' && businessLicenseStatus === 'normal') {
		// 	setBusinessLicenseStatus('notClicked');
		// 	return;
		// }
		// if (businessLicenseStatus !== 'normal') return;
		if (emptyInput !== 0) return;
		await saveStep2UserInput(e.currentTarget.step2, setStep2Request);
		await makeBusinessHourData(dayOffRef, selectedBusinessHourBtn, setStep2Request);
		await makeStoreAddress(storePostcodeInputs, setStep2Request);
		await handleFindCoords(storePostcodeInputs.address);
		makeImgPath(selectedStoreImageBtn, S3ImagePath, setStep2Request);
		changeModalKey(MODAL_KEY.ON_STORE_REGISTRATION_STEP_CHANGE_CONFIRM_MODAL);
	};
	const submitInputs = async () => {
		const step1Response = await patchManager(step1Request);
		const step2Response = await postStore(step2Request);
		setComplete({ managerId: step1Response?.id ?? -1, storeId: step2Response.storeId });
	};
	const handleSelectedStoreImageBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedStoreImageBtn === e.target.value) return;
		setSelectedStoreImageBtn(e.target.value);
		if (e.target.value === 'defaultImage') {
			setClientStoreImageURL('');
		}
	};
	const handleSelectedBusinessHourBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedBusinessHourBtn === e.target.value) return;
		setSelectedBusinessHourBtn(e.target.value);
	};
	const handleExtractedPostCode = (extractedPostcode: string[]) => {
		const [zonecode, address] = extractedPostcode;
		if (zonecode !== '') changeNormal('storeZonecode');
		if (address !== '') changeNormal('basicAddress');
		setStorePostcodeInputs({
			...storePostcodeInputs,
			zonecode,
			address,
		});

	};
	const handleStoreAddressDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStorePostcodeInputs({
			...storePostcodeInputs,
			detailAddress: event.target.value,
		});
	};
	const handleHoverState = () => {
		if (businessLicenseStatus === 'error' || businessLicenseStatus === 'notClicked') {
			setBusinessLicenseStatus('normal');
		}

		changeNormal('registrationNumber');
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
			setBusinessLicenseStatus('error');
		}
		if (b_stt_cd === '01') {
			// 활성사업자
			setBusinessLicenseStatus('success');
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
		changeNormal('imgPath');
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
		if (complete.managerId !== -1 && complete.storeId !== -1) {
			router.push(`/registration/step3?storeId=${complete.storeId}`);
		}
	}, [complete]);
	useEffect(() => {
		if (query.toString() !== '') {
			getStore().then((result) => setInitialValue(result));
		}
	}, []);

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
							inputFlag={registrationNumber.isError}
							isAuthorizedNumber={businessLicenseStatus}
							onFocus={handleHoverState}
							placeholder="‘-‘ 를 빼고 숫자만 입력해주세요"
							value={registrationNumber.value ?? undefined}
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
						emptyErrorMessage="상호를"
						name="step2"
						id="name"
						onFocus={() => changeNormal('name')}
						inputFlag={name.isError}
						width="320px"
						placeholder="상호명을 입력해주세요"
						value={name.value ?? undefined}
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="callNumber">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							매장 전화번호
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="매장 전화번호를"
						name="step2"
						id="callNumber"
						onFocus={() => changeNormal('callNumber')}
						inputFlag={callNumber.isError}
						width="320px"
						placeholder="‘-‘ 를 포함하여 입력해주세요"
						value={callNumber.value ?? undefined}
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
							emptyErrorMessage="매장 주소를"
							readOnly={true}
							inputFlag={storeZonecode.isError}
							name="step2"
							id="storeZonecode"
							value={storeZonecode.value ?? undefined}
							width="320px"
							placeholder="입력하기"
						/>
						<PostcodePopupOpenBtn onExtractedPostCode={handleExtractedPostCode} />
					</StyledLayout.FlexBox>

					<TextField
						emptyErrorMessage="매장 주소를"
						readOnly={true}
						inputFlag={basicAddress.isError}
						name="step2"
						id="basicAddress"
						value={basicAddress.value ?? undefined}
						width="560px"
						placeholder="입력하기"
					/>
					<TextField
						emptyErrorMessage="상세 주소를"
						onFocus={() => changeNormal('addressDetail')}
						inputFlag={addressDetail.isError}
						name="step2"
						id="addressDetail"
						placeholder="(필수) 상세주소를 입력해주세요"
						value={addressDetail.value ?? undefined}
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
							defaultChecked={imgPath.value[0] === null}
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
							onClick={() => changeNormal('imgPath')}
							name="storeImage"
							value="registerImage"
							onChange={handleSelectedStoreImageBtn}
							defaultChecked={imgPath.value[0] !== null}
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
									clientStoreImageURL={imgPath.value[0] ?? clientStoreImageURL}
									inputFlag={imgPath.isError}
									value={imgPath.value[0] ?? clientStoreImageURL}
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
						value={instaAccount ?? undefined}
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
							<RadioBtn name="businessHour" value="weekDaysWeekEnd" onChange={handleSelectedBusinessHourBtn} defaultChecked />
							<label htmlFor="weekDaysWeekEnd">
								<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_006}>
									평일 / 주말 달라요
								</Typography>
							</label>
						</StyledLayout.FlexBox>
						<StyledLayout.FlexBox gap="8px" alignItems="center">
							<RadioBtn name="businessHour" value="eachDays" onChange={handleSelectedBusinessHourBtn} />
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
									<Typography variant="h3" aggressive="button_001" color="gray_007">
										평일
									</Typography>
									<Typography variant="h4" aggressive="body_oneline_004" color="gray_005" margin="0 20px 0 0">
										(월~금)
									</Typography>
								</StyledLayout.FlexBox>
								<TimePicker dayOffRef={(el) => (dayOffRef.current[0] = el)} name="weekDays" />
							</StyledLayout.FlexBox>
							<StyledLayout.FlexBox>
								<StyledLayout.FlexBox flexDirection="column" gap="6px">
									<Typography variant="h3" aggressive="button_001" color="gray_007">
										주말
									</Typography>
									<Typography variant="h4" aggressive="body_oneline_004" color="gray_005" margin="0 20px 0 0">
										(토~일)
									</Typography>
								</StyledLayout.FlexBox>
								<TimePicker dayOffRef={(el) => (dayOffRef.current[1] = el)} name="WeekEnd" disabled={dayOffStatus[0]} />
								<DayOffBtn dayOff={dayOffStatus[0]} onClick={() => handleTimePickerInput(0)} style={{ marginLeft: '6px' }} />
							</StyledLayout.FlexBox>
						</StyledLayout.FlexBox>
					) : (
						<StyledLayout.FlexBox flexDirection="column" gap="12px">
							{businessHourDays.map(({ id, day }) => {
								return (
									<StyledLayout.FlexBox key={id} alignItems="center">
										<StyledLayout.FlexBox flexDirection="column" gap="6px">
											<Typography variant="h3" aggressive="button_001" color="gray_007" margin="0 20px 0 0">
												{day}
											</Typography>
										</StyledLayout.FlexBox>
										<TimePicker dayOffRef={(el) => (dayOffRef.current[id] = el)} disabled={dayOffStatus[id - 1]} />
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
						emptyErrorMessage="휴무일을"
						name="step2"
						id="notice"
						inputFlag={notice.isError}
						onFocus={() => changeNormal('notice')}
						width="320px"
						value={notice.value ?? undefined}
						placeholder="휴무일을 자유롭게 입력해주세요"
					/>
					<StyledLayout.FlexBox style={{ paddingTop: '4px' }}>
						<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							ex) 연중 무휴, 매주 토요일, 매달 둘째 및 넷째주 토요일 등
						</Typography>
					</StyledLayout.FlexBox>
				</StyledLayout.TextFieldSection>
				<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
					{query.toString() === '' ? (
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
		</>
	);
};

export default Step2;
