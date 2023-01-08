'use client';
import { DropDownList } from 'components/feature';

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
