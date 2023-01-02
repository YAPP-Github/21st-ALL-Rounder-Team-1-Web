'use client';

import { BusinessLicenseTextField, TextField } from 'components/feature';
import style from 'styles/style';

const Registration = () => {
	return (
		<>
			<BusinessLicenseTextField flag="normal" name="사업자" />
			<TextField
				onChange={(e) => alert(e.target.value)}
				name="가격"
				placeholder="가격"
				flag="normal"
				width={style.textFieldWidth.textField_width_001}
			/>
		</>
	);
};

export default Registration;
