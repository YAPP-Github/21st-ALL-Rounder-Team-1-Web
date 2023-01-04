import { AddPhotoIcon } from 'public/static/icons';
import { ProductErrorMeassage, ProductImageContainer } from './styled';


type Props = {
	isError: boolean;
}
const ProductImageBtn = (props: Props) => {
	return (
		<>
			<ProductImageContainer isError={props.isError}>
				<AddPhotoIcon />
			</ProductImageContainer>
			{/* <ProductErrorMeassage>사진을 입력하세요</ProductErrorMeassage> */}
		</>
	);
};
export default ProductImageBtn;
