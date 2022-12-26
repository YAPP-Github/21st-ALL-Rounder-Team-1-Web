import { PhotoIcon } from 'public/static/icons';
import { ProductErrorMeassage, ProductImageContainer } from './styled';

interface Props {
	isError: boolean;
}
const ProductImageBtn = (props: Props) => {
	return (
		<>
			<ProductImageContainer isError={props.isError}>
				<PhotoIcon />
			</ProductImageContainer>
			<ProductErrorMeassage>사진을 입력하세요</ProductErrorMeassage>
		</>
	);
};
export default ProductImageBtn;
