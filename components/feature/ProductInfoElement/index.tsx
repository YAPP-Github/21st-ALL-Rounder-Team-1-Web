import { StyledLayout } from 'components/shared';
import ProductAddBtn from '../Button/ProductAddBtn';
import TextField from '../TextField';

type Props = {
	elementIndex: number;
	onClick: () => void;
} & React.ComponentProps<'div'>;
const ProductInfoElement = ({ elementIndex, onClick, ...props }: Props) => {
	return (
		<StyledLayout.FlexBox className={props.className} width="932px" gap="7px">
			<TextField value="Sdf" inputFlag={'normal'} width="276px" placeholder="브랜드명" />
			<TextField inputFlag={'normal'} width="594px" placeholder="상품명" />
			<ProductAddBtn onClick={onClick} />
		</StyledLayout.FlexBox>
	);
};
export default ProductInfoElement;
