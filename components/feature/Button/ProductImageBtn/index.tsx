import { AddPhotoIcon } from 'public/static/icons';
import { useRef, RefObject } from 'react';
import { ProductImageContainer } from './styled';

type Props = {
	isError: boolean;
};
const ProductImageBtn = (props: Props) => {
	const productImgRef = useRef() as RefObject<HTMLInputElement>;
	return (
		<>
			<ProductImageContainer
				isError={props.isError}
				onClick={() => {
					productImgRef.current?.click();
				}}
			>
				<AddPhotoIcon />
				<input type="file" ref={productImgRef} style={{ display: 'none' }} />
			</ProductImageContainer>
		</>
	);
};
export default ProductImageBtn;
