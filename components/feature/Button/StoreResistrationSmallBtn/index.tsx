import { Typography } from 'components/shared';
import { SmallBtnContainer } from './styled';

type Props = {
	children: string | React.ReactNode;
	width: React.CSSProperties;
} & React.ComponentProps<'button'>;
const StoreResistrationSmallBtn = ({ children, ...props }: Props) => {
	return (
		<SmallBtnContainer
			value={props.value}
			onClick={props.onClick}
			type={props.type}
			style={props.width}
			disabled={props.disabled}
		>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</SmallBtnContainer>
	);
};
export default StoreResistrationSmallBtn;
