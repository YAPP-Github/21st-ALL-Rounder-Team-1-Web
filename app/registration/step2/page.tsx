'use client';

import { TextField, PostcodePopupOpenBtn } from 'components/feature';
import { useState } from 'react';

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
		</>
	);
};

export default Step2;
