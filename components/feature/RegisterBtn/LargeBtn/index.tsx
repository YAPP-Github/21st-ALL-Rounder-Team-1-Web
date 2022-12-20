import * as S from '../styled';

interface Props {
	width: number;
	background: string; // blue or white
	btnText: string;
}
const LargeBtn = (props: Props) => {
	return (
		<S.LargeBtnContainer width={props.width} background={props.background}>
			<span>{props.btnText}</span>
		</S.LargeBtnContainer>
	);
};
export default LargeBtn;
