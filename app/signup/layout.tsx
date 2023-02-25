'use client';

import { ReactNode } from 'react';
import { StyledLayout } from 'components/shared';

const SignUpLayout = ({ children }: { children: ReactNode }) => {
	return (
		<StyledLayout.MaxContainer>
			<StyledLayout.FlexBox flexDirection="column" alignItems="center">
				{children}
			</StyledLayout.FlexBox>
		</StyledLayout.MaxContainer>
	);
};

export default SignUpLayout;
