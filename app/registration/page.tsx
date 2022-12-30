'use client';
import { BusinessLicenseTextField, TextField } from 'components/feature';
import style from 'styles/style';

const Registration = () => {
	return (
		<>
			<TextField flag="error" placeholder="입력해주세요" width={style.textFieldWidth.textField_width_003} />
			<TextField flag="normal" width={style.textFieldWidth.textField_width_001} placeholder="가격" />
			<BusinessLicenseTextField flag="normal" placeholder="입력해주세요" />
		</>
	);
};

export default Registration;
