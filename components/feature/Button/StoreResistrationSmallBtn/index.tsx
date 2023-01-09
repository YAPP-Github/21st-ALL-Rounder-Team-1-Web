import { Typography } from 'components/shared';
import { SmallBtnContainer } from './styled';

type Props = {
	width: number;
	children: React.ReactNode;
};
const StoreResistrationSmallBtn = ({ width, children }: Props) => {
	return (
		<SmallBtnContainer width={width}>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</SmallBtnContainer>
	);
};
export default StoreResistrationSmallBtn;
