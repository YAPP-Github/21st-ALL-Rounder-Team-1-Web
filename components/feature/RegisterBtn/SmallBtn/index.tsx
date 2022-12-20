import * as S from '../styled';

interface Props {
	width: number;
	btnText: string;
}
const SmallBtn = (props: Props) => {
	return (
		<S.SmallBtnContainer width={props.width}>
			<span>{props.btnText}</span>
		</S.SmallBtnContainer>
	);
};
export default SmallBtn;
