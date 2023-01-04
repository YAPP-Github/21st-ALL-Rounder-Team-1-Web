'use client';
import style from 'styles/style';
import { BusinessLicenseTextField, DropDownList, TextField } from 'components/feature';

const Registration = () => {
	return (
		<>
			<DropDownList
				dropdownElements={[
					[0, 'g당'],
					[1, 'ml당'],
				]}
			/>
		</>
	);
};

export default Registration;
