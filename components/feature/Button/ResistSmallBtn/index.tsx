import { SmallBtnContainer } from './styled';

interface Props {
	width: number;
	btnText: string;
}
const ProductImageBtn = (props: Props) => {
	return (
		<SmallBtnContainer width={props.width}>
			<span>{props.btnText}</span>
		</SmallBtnContainer>
	);
};
export default ProductImageBtn;
