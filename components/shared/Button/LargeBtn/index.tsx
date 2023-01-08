import Typography from 'components/shared/Typography';
import { LargeBtnContainer } from './styled';

type Props = {
	children: React.ReactNode;
	style: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LargeBtn = (props: Props) => {
	return (
		<LargeBtnContainer style={props.style} onClick={props.onClick}>
			<Typography variant="span" aggressive="button_001">
				{props.children}
			</Typography>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
