import { Typography } from 'components/shared';
import { SmallBtnContainer } from './styled';

type Props = {
	width: number;
	btnText: string;
};
const StoreResistrationSmallBtn = ({ width, btnText }: Props) => {
	return (
		<SmallBtnContainer width={width}>
			<Typography variant="span" aggressive="button_001">
				{btnText}
			</Typography>
		</SmallBtnContainer>
	);
};
export default StoreResistrationSmallBtn;
