import { Typography } from 'components/shared';
import { SmallBtnContainer } from './styled';

type Props = {
	children: string;
	width: React.CSSProperties;
} & React.ComponentProps<'button'>;
const StoreResistrationSmallBtn = ({ children, ...props }: Props) => {
	return (
		<SmallBtnContainer onClick={props.onClick} type={props.type} style={props.width}>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</SmallBtnContainer>
	);
};
export default StoreResistrationSmallBtn;
