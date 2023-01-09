import { Typography } from 'components/shared';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { theme } from 'styles';
import { TabContainer, TabElement } from './styled';

const Tab = () => {
	const addBorderRight = true;
	const pathname = usePathname();
	const tabElementArr = [
		{ id: 1, step: 'Step1', title: '운영자 기본정보' },
		{ id: 2, step: 'Step2', title: '매장정보' },
		{ id: 3, step: 'Step3', title: '상품정보' },
	];
	const [currentStep, setCurrentStep] = useState(1);
	const checkDetailUI = (elementId: number) => {
		if (elementId === 3 || elementId + 1 === currentStep) return !addBorderRight;
		return addBorderRight;
	};
	useEffect(() => {
		if (pathname !== '/registration' && pathname !== null) {
			setCurrentStep(() => Number(pathname[pathname.length - 1]));
		}
	}, [pathname]);
	return (
		<TabContainer>
			{tabElementArr.map(({ id, step, title }) => {
				return (
					<TabElement borderRight={checkDetailUI(id)} key={step} isSelected={id === currentStep}>
						<Typography
							variant="h2"
							color={id === currentStep ? theme.colors.primary_010 : theme.colors.gray_003}
							aggressive="body_oneline_005"
						>
							{step}
						</Typography>
						<Typography
							variant="span"
							color={id === currentStep ? theme.colors.gray_007 : theme.colors.gray_004}
							aggressive="tab_002"
						>
							{title}
						</Typography>
					</TabElement>
				);
			})}
		</TabContainer>
	);
};
export default Tab;
