import { AddIcon, RemoveIcon } from 'public/static/icons';
import { ProductBtnContainer } from './styled';

interface Props {
	isPlus: boolean; // true-> plus, false->remove
}
const ProductBtn = (props: Props) => {
	return (
		<>
			{!props.isPlus ? (
				<ProductBtnContainer>
					<RemoveIcon />
				</ProductBtnContainer>
			) : (
				<ProductBtnContainer>
					<AddIcon />
				</ProductBtnContainer>
			)}
		</>
	);
};
export default ProductBtn;
