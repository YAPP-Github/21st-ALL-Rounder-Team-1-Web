'use client';

import { StyledLayout } from 'components/shared';


const Registration = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledLayout.FlexBox flex-direction="column" gap="24px">
			{children}
		</StyledLayout.FlexBox>
	);
};

export default Registration;
