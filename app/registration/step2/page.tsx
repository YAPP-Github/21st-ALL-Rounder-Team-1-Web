'use client';

import { RefObject, useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import {
	TextField,
	PostcodePopupOpenBtn,
	BusinessLicenseTextField,
	StoreResistrationSmallBtn,
	RadioBtn,
	StoreImageBtn,
} from 'components/feature';
import { checkEmptyInputError, extractBusinessLicenseExceptHyhpen } from 'core/storeRegistrationService';
import style from 'styles/style';
import { theme } from 'styles';
import { EmptyStoreImg } from 'public/static/images';
import { useStep2Store } from 'store/actions/storeRegistrationStore';

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
	const [storePostcodeInputs, setStorePostcodeInputs] = useState({
		zonecode: '', // 우편번호
		address: '', // 기본 주소
		addressDetail: '', // 상세 주소
	});
	const businessLicenseInputRef = useRef() as RefObject<HTMLInputElement>;
	const [businessLicenseStatus, setBusinessLicenseStatus] = useState<'normal' | 'success' | 'error' | 'notClicked'>('normal');
	const [selectedStoreImageBtn, setSelectedStoreImageBtn] = useState('defaultImage');
	const [selectedBusinessHourBtn, setSelectedBusinessHourBtn] = useState('weekDaysWeekEnd');
	const { inputArr, changeError, changeNormal } = useStep2Store();
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emptyInput = checkEmptyInputError(e.currentTarget.step2, changeError);
		if (e.currentTarget.step2[0].value !== '' && businessLicenseStatus === 'normal') setBusinessLicenseStatus('notClicked');
		if (emptyInput !== 0) return;

		// 여기서부터 서버 api 연결 로직
	};
	const handleSelectedStoreImageBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedStoreImageBtn === e.target.value) return;
		setSelectedStoreImageBtn(e.target.value);
	};
	const handleSelectedBusinessHourBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (selectedBusinessHourBtn === e.target.value) return;
		setSelectedBusinessHourBtn(e.target.value);
	};
	const handleExtractedPostCode = (extractedPostcode: string[]) => {
		const [zonecode, address] = extractedPostcode;
		if (zonecode !== '') changeNormal(3);
		if (address !== '') changeNormal(4);
		setStorePostcodeInputs({
			...storePostcodeInputs,
			zonecode,
			address,
		});
	};
	const handleStoreAddressDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStorePostcodeInputs({
			...storePostcodeInputs,
			addressDetail: event.target.value,
		});
	};
	const handleHoverState = () => {
		if (businessLicenseStatus === 'error') {
			setBusinessLicenseStatus('normal');
		}
		changeNormal(0);
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

		if (b_stt_cd === '02') {
			// 휴업자
		}

		if (b_stt_cd === '03') {
			// 폐업자
		}
		businessLicenseInputRef.current.blur();
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="businessLicense">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						사업자번호
					</Typography>
				</label>
				<StyledLayout.FlexBox gap={'6px'}>
					<BusinessLicenseTextField
						businessLicenseTextFieldRef={businessLicenseInputRef}
						name="step2"
						id="businessLicense"
						inputFlag={inputArr[0]}
						isAuthorizedNumber={businessLicenseStatus}
						onFocus={handleHoverState}
					/>
					<StoreResistrationSmallBtn width={{ width: '106px' }} onClick={handleBusinessLicenseStatusCheck}>
						번호 조회
					</StoreResistrationSmallBtn>
				</StyledLayout.FlexBox>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="storeName">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						상호
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="상호를"
					name="step2"
					id="storeName"
					onFocus={() => changeNormal(1)}
					inputFlag={inputArr[1]}
					width="320px"
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="storeTelephoneNumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						매장 전화번호
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="매장 전화번호를"
					name="step2"
					id="storeTelephoneNumber"
					onFocus={() => changeNormal(2)}
					inputFlag={inputArr[2]}
					width="320px"
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="store-address-detail">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						매장 주소
					</Typography>
				</label>
				<StyledLayout.FlexBox gap="6px">
					<TextField
						emptyErrorMessage="매장 주소를"
						readOnly={true}
						inputFlag={inputArr[3]}
						name="step2"
						id="store-postcode"
						value={storePostcodeInputs.zonecode}
						width="320px"
					/>
					<PostcodePopupOpenBtn onExtractedPostCode={handleExtractedPostCode} />
				</StyledLayout.FlexBox>

				<TextField
					emptyErrorMessage="매장 주소를"
					readOnly={true}
					inputFlag={inputArr[4]}
					name="step2"
					id="store-address"
					value={storePostcodeInputs.address}
					width="560px"
				/>
				<TextField
					emptyErrorMessage="상세 주소를"
					onFocus={() => changeNormal(5)}
					inputFlag={inputArr[5]}
					name="step2"
					id="store-address-detail"
					placeholder="(필수) 상세주소를 입력해주세요"
					value={storePostcodeInputs.addressDetail}
					width="560px"
					onChange={handleStoreAddressDetailChange}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
					매장 사진
				</Typography>
				<StyledLayout.FlexBox style={{ paddingTop: '8px', paddingBottom: '12px' }}>
					<RadioBtn name="storeImage" value="defaultImage" onChange={handleSelectedStoreImageBtn} defaultChecked />
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
							<Image src={EmptyStoreImg} alt="기본가게이미지" width={343} height={160} style={{ paddingTop: '8px' }} />
						)}
					</StyledLayout.FlexBox>
				</StyledLayout.FlexBox>
				<StyledLayout.FlexBox>
					<RadioBtn name="storeImage" value="registerImage" onChange={handleSelectedStoreImageBtn} />
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
						{selectedStoreImageBtn === 'registerImage' && <StoreImageBtn />}
					</StyledLayout.FlexBox>
				</StyledLayout.FlexBox>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="PromotionalChannel">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						홍보 채널 (선택)
					</Typography>
				</label>
				<TextField name="step2" id="PromotionalChannel" inputFlag="normal" width="320px" />
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
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="dayOff">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						휴무일
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="휴무일을"
					name="step2"
					id="dayOff"
					inputFlag={inputArr[7]}
					onFocus={() => changeNormal(7)}
					width="320px"
				/>
				<StyledLayout.FlexBox style={{ paddingTop: '4px' }}>
					<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						ex) 연중 무휴, 매주 토요일, 매달 둘째 및 넷째주 토요일 등
					</Typography>
				</StyledLayout.FlexBox>
			</StyledLayout.TextFieldSection>
			<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
				<LargeBtn style={style.btnStyle.primary_btn_002}>다음단계</LargeBtn>
			</StyledLayout.FlexBox>
		</form>
	);
};

export default Step2;
