'use client';
import { usePathname, useRouter } from 'next/navigation';
import style from 'styles/style';
import { RegistrationHeader, Tab } from 'components/feature';
import { LargeBtn, StyledLayout } from 'components/shared';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const pathname = usePathname();
	const handleClick = () => {
		if (pathname === '/registration') router.push('/registration/step1');
		else if (pathname === '/registration/step1') router.push('/registration/step2');
		else if (pathname === '/registration/step2') router.push('/registration/step3');
	};

	return (
		<StyledLayout.MaxContainer>
			<StyledLayout.SubMaxContainer>
				<StyledLayout.FlexBox flex-direction="column" align-items="center">
					<RegistrationHeader />
					{/* <Tab />
					<div>{children}</div> */}
				</StyledLayout.FlexBox>
			</StyledLayout.SubMaxContainer>
		</StyledLayout.MaxContainer>
	);
};

export default RegistrationLayout;
