import { LargeBtnContainer } from './styled';

type Props = {
	children: React.ReactNode;
	style: React.CSSProperties;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LargeBtn = (props: Props) => {
	return (
		<LargeBtnContainer style={props.style} onClick={props.onClick}>
			<span>{props.children}</span>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
