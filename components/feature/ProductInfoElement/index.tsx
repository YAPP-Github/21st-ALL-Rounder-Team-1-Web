import { StyledLayout } from 'components/shared';
import TextField from '../TextField';

const ProductInfoElement = () => {
	return (
		<StyledLayout.FlexBox width="932px" gap="7px">
			<TextField inputFlag={'normal'} width="276px" placeholder="브랜드명" />
			<TextField inputFlag={'normal'} width="594px" placeholder="상품명" />
		</StyledLayout.FlexBox>
	);
};
export default ProductInfoElement;
