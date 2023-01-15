'use client';

import { RefObject, useState, useRef } from 'react';
import axios from 'axios';
import { LargeBtn } from 'components/shared';
import { TextField, PostcodePopupOpenBtn, BusinessLicenseTextField } from 'components/feature';
import { extractBusinessLicenseExceptHyhpen } from 'core/storeRegistrationService';
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
	const [storePostcodeInputs, setStorePostcodeInputs] = useState({
		zonecode: '', // 우편번호
		address: '', // 기본 주소
		addressDetail: '', // 상세 주소
	});

	const handleExtractedPostCode = (extractedPostcode: string[]) => {
		const [zonecode, address] = extractedPostcode;

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

	const businessLicenseInputRef = useRef() as RefObject<HTMLInputElement>;
	const [businessLicenseStatus, setBusinessLicenseStatus] = useState<'normal' | 'success' | 'error'>('normal');

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

		const { b_stt_cd } = businessLicenseStatusResponse.data.data[0];

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
	};

	return (
		<>
			<TextField
				readonly={true}
				flag="normal"
				name="store-postcode"
				placeholder="우편번호"
				value={storePostcodeInputs.zonecode}
				width={{ width: '320px' }}
			/>
			<PostcodePopupOpenBtn onExtractedPostCode={handleExtractedPostCode} />
			<TextField
				readonly={true}
				flag="normal"
				name="store-address"
				placeholder="주소"
				value={storePostcodeInputs.address}
				width={{ width: '560px' }}
			/>
			<TextField
				flag="normal"
				name="store-address-detail"
				placeholder="상세주소"
				value={storePostcodeInputs.addressDetail}
				width={{ width: '560px' }}
				onChange={handleStoreAddressDetailChange}
			/>

			<BusinessLicenseTextField
				businessLicenseTextFieldRef={businessLicenseInputRef}
				name="businessLicense"
				inputFlag={businessLicenseStatus}
			/>

			<LargeBtn style={style.btnStyle.white_btn} onClick={handleBusinessLicenseStatusCheck}>
				번호 조회
			</LargeBtn>
		</>
	);
};

export default Step2;
