import Typography from 'components/shared/Typography';
import { ButtonHTMLAttributes } from 'react';
import { LargeBtnContainer } from './styled';

type Props = {
	children: React.ReactNode;
	style: React.CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LargeBtn = ({ children, style, ...props }: Props) => {
	const { type, disabled, onClick } = props;

	return (
		<LargeBtnContainer style={style} type={type ?? 'button'} disabled={disabled} onClick={onClick}>
			<Typography variant="span" aggressive="button_001">
				{children}
			</Typography>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
