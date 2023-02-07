import { StyledLayout } from 'components/shared';
import ProductAddBtn from '../Button/ProductAddBtn';
import TextField from '../TextField';

type Props = {
	brandName: string;
	productName: string;
	isProductEmptyError: 'normal' | 'error';
	onClick: () => void;
} & React.ComponentProps<'div'>;
const ProductInfoElement = ({ brandName, productName, isProductEmptyError, onClick, ...props }: Props) => {
	return (
		<StyledLayout.FlexBox className={props.className} width="932px" gap="7px">
			<TextField value={brandName} inputFlag={'normal'} width="276px" placeholder="브랜드명" />
			<TextField value={productName} inputFlag={isProductEmptyError} width="594px" placeholder="상품명" />
			<ProductAddBtn onClick={onClick} />
		</StyledLayout.FlexBox>
	);
};
export default ProductInfoElement;
