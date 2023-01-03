import { Typography } from 'components/shared';
import { TabContainer, TabElement } from './styled';

const Tab = () => {
	return (
		<TabContainer>
			<TabElement>
				<Typography variant="h2" aggressive="body_oneline_005">
					Step1
				</Typography>
				<Typography variant="span" aggressive="tab_002">
					운영자 기본정보
				</Typography>
			</TabElement>
			<TabElement>
				<Typography variant="h2" aggressive="body_oneline_005">
					Step2
				</Typography>
				<Typography variant="span" aggressive="tab_002">
					매장정보
				</Typography>
			</TabElement>
			<TabElement>
				<Typography variant="h2" aggressive="body_oneline_005">
					Step3
				</Typography>
				<Typography variant="span" aggressive="tab_002">
					상품정보
				</Typography>
			</TabElement>
		</TabContainer>
	);
};
export default Tab;
