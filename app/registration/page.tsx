'use client';
import { BusinessLicenseTextField, TextField } from 'components/feature';

const Registration = () => {
	return (
		<>
			<TextField flag="error" placeholder="입력해주세요" />
			<TextField flag="normal" placeholder="입력해주세요" />
			<BusinessLicenseTextField flag="normal" placeholder="입력해주세요" />
		</>
	);
};

export default Registration;
