'use client';
import { RegistrationHeader, Tab } from 'components/feature';
import { StyledLayout } from 'components/shared';
import { usePathname, useSearchParams } from 'next/navigation';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	const query = useSearchParams();
	const pathname = usePathname();
	const isStoreRegistrationSuccessPage = pathname === '/registration/success';

	return (
		<StyledLayout.MaxContainer>
			<StyledLayout.SubMaxContainer>
				{isStoreRegistrationSuccessPage ? (
					<>{children}</>
				) : (
					<>
						<RegistrationHeader query={query.toString()} pathname={pathname} />
						<Tab />
						<StyledLayout.RegistrationContentContainer>{children}</StyledLayout.RegistrationContentContainer>
					</>
				)}
			</StyledLayout.SubMaxContainer>
		</StyledLayout.MaxContainer>
	);
};

export default RegistrationLayout;
