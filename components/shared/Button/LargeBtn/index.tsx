import { LargeBtnContainer } from './styled';

interface Props {
	width: number;
	background: string; // blue or white
	btnText: string;
}
const LargeBtn = (props: Props) => {
	return (
		<LargeBtnContainer width={props.width} background={props.background}>
			<span>{props.btnText}</span>
		</LargeBtnContainer>
	);
};
export default LargeBtn;
