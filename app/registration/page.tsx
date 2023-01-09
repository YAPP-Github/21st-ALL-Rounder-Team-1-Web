'use client';

import { StyledLayout } from 'components/shared';


const Registration = ({ children }: { children: React.ReactNode }) => {
	return <StyledLayout.FlexBox flex-direction="column">{children}</StyledLayout.FlexBox>;
};

export default Registration;
