'use client';
import { BusinessLicenseTextField, TextField } from 'components/feature';

const Registration = () => {
	return (
		<>
			<TextField isError={true} placeholder="입력해주세요" />
			<TextField placeholder="입력해주세요" />
			<BusinessLicenseTextField isError={true} placeholder="입력해주세요" />
		</>
	);
};

export default Registration;
