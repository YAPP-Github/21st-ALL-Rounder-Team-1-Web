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
	const [selectedStep, setSelectedStep] = useState(0);
	const checkDetailUI = (curElement: number) => {
		const nextElement = curElement + 1;
		if (curElement === 3 || nextElement === selectedStep) return !addBorderRight;
		return addBorderRight;
	};
	useEffect(() => {
		if (pathname !== '/registration' && pathname !== null) {
			setSelectedStep(Number(pathname[pathname.length - 1]));
		}
	}, [pathname]);
	return (
		<TabContainer>
			{tabElementArr.map(({ id, step, title }) => {
				return (
					<TabElement borderRight={checkDetailUI(id)} key={step} isSelected={id === selectedStep}>
						<Typography
							variant="h2"
							color={id === selectedStep ? theme.colors.primary_010 : theme.colors.gray_003}
							aggressive="body_oneline_005"
						>
							{step}
						</Typography>
						<Typography
							variant="span"
							color={id === selectedStep ? theme.colors.gray_007 : theme.colors.gray_004}
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
