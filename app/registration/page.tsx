'use client';
import { TextField } from 'components/feature';

const Registration = () => {
	return (
		<>
			<TextField isError={true} placeholder="입력해주세요" />
			<TextField placeholder="입력해주세요" />
			<TextField isSuccess={true} placeholder="입력해주세요" />
		</>
	);
};

export default Registration;
