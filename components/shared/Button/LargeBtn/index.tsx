import Typography from 'components/shared/Typography';
import { LargeBtnContainer } from './styled';

type Props = {
	children: string;
	style: React.CSSProperties;
} & React.ComponentProps<'button'>;

const LargeBtn = ({ children, style, ...props }: Props) => {
	return (
		<LargeBtnContainer style={style} onClick={props.onClick} type={props.type}>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
