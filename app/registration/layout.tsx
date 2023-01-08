'use client';
import { RegistrationHeader, Tab } from 'components/feature';
import { StyledLayout } from 'components/shared';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledLayout.MaxContainer>
			<StyledLayout.SubMaxContainer>
				<RegistrationHeader />
				<Tab />
				<StyledLayout.RegistrationContentContainer>{children}</StyledLayout.RegistrationContentContainer>
			</StyledLayout.SubMaxContainer>
		</StyledLayout.MaxContainer>
	);
};

export default RegistrationLayout;
