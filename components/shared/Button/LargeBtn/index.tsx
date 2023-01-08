import Typography from 'components/shared/Typography';
import { LargeBtnContainer } from './styled';

type Props = {
	children: React.ReactNode;
	style: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const LargeBtn = ({ children, style, onClick }: Props) => {
	return (
		<LargeBtnContainer style={style} onClick={onClick}>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
