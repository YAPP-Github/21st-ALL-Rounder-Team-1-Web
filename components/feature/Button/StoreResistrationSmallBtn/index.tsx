import { SmallBtnContainer } from './styled';

type Props = {
	width: number;
	btnText: string;
}
const StoreResistrationSmallBtn = (props: Props) => {
	return (
		<SmallBtnContainer width={props.width}>
			<span>{props.btnText}</span>
		</SmallBtnContainer>
	);
};
export default StoreResistrationSmallBtn;
