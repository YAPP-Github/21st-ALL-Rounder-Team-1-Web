import { RemoveIcon } from 'public/static/icons';
import { ProductBtnContainer } from './styled';

type Props = {
	onClick: () => void;
};
const ProductRemoveBtn = ({ onClick }: Props) => {
	return (
		<ProductBtnContainer onClick={onClick}>
			<RemoveIcon />
		</ProductBtnContainer>
	);
};
export default ProductRemoveBtn;
