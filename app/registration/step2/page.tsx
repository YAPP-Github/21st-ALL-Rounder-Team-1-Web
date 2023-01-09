'use client';

import { TextField, PostcodePopupOpenBtn } from 'components/feature';

const Step2 = () => {
	return (
		<>
			<TextField flag="normal" name="store-postcode" placeholder="우편번호" width={{ width: '320px' }} onChange={() => {}} />
			<PostcodePopupOpenBtn />
			<TextField flag="normal" name="store-address" placeholder="주소" width={{ width: '560px' }} onChange={() => {}} />
			<TextField
				flag="normal"
				name="store-address-detail"
				placeholder="상세주소"
				width={{ width: '560px' }}
				onChange={() => {}}
			/>
		</>
	);
};

export default Step2;
