import { AddIcon } from 'public/static/icons';
import { ProductBtnContainer } from './styled';

type Props = {
	onClick: () => void;
};
const ProductAddBtn = ({ onClick }: Props) => {
	return (
		<ProductBtnContainer onClick={onClick}>
			<AddIcon />
		</ProductBtnContainer>
	);
};
export default ProductAddBtn;
