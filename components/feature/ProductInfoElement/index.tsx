import { StyledLayout } from 'components/shared';
import { Product, useProductStore } from 'store/actions/storeRegistrationStore';
import ProductAddBtn from '../Button/ProductAddBtn';
import ProductRemoveBtn from '../Button/ProductRemoveBtn';
import TextField from '../TextField';

type Props = {
	elementIdx: number;
	brandName: string;
	productName: string;
	isProductEmptyError: 'normal' | 'error';
	productArr: Array<Product['product']>;
} & React.ComponentProps<'div'>;
const ProductInfoElement = ({ elementIdx, brandName, productName, isProductEmptyError, productArr, ...props }: Props) => {
	const { addProduct, removeProduct, onChangeBrandName, onChangeProductName } = useProductStore();
	return (
		<StyledLayout.FlexBox className={props.className} width="932px" gap="7px">
			<TextField
				value={brandName}
				onChange={(e) => onChangeBrandName(productArr, elementIdx, e.target.value)}
				inputFlag="normal"
				width="276px"
				placeholder="브랜드명"
			/>
			<TextField
				value={productName}
				onChange={(e) => onChangeProductName(productArr, elementIdx, e.target.value)}
				inputFlag={isProductEmptyError}
				width="594px"
				placeholder="상품명"
			/>
			{elementIdx === 0 ? (
				<ProductAddBtn onClick={() => addProduct(productArr)} />
			) : (
				<ProductRemoveBtn onClick={() => removeProduct(productArr, elementIdx)} />
			)}
		</StyledLayout.FlexBox>
	);
};
export default ProductInfoElement;
