import ShowImageContent from 'components/feature/ShowImageContent';
import { AddPhotoIcon } from 'public/static/icons';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { ProductImageContainer } from './styled';

const ProductImageBtn = () => {
	const productImgRef = useRef() as RefObject<HTMLInputElement>;
	// file 데이터
	const [productImage, setProductImage] = useState('');
	// 화면 표시를 위한 임시 url
	const [createObjectURL, setCreateObjectURL] = useState('');
	// 화면 상단에 이미지 표시
	const uploadToClient = (e: ChangeEvent<HTMLInputElement>) => {
		// 기존에 첨부한 이미지가 있을 경우 createObjectUrl 해제
		if (createObjectURL) {
			URL.revokeObjectURL(createObjectURL);
		}
		/*
	input에 이미지 파일을 첨부하게 되면 e.target.files 배열에 이미지가 추가된다.
	단일 파일을 추가할 것이므로 0번 인덱스만 이용
  
	e.target.files[0]은 File객체로 Blob의 일종이다 자세한 것은 mdn 참고
	https://developer.mozilla.org/ko/docs/Web/API/File
	*/

		if (e.target.files?.[0]) {
			const i = e.target.files[0];
			setProductImage(i.toString());

			/*
	  화면 상단에 현재 input에 추가한 파일 표시
	  실제 S3 업로드X, 클라이언트에서만 처리하는 것으로
	  URL.createObjectURL : file객체를 이용하여 임시 url 생성하여 이미지 표시한다
	  mdn : https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL
	  */
			setCreateObjectURL(URL.createObjectURL(i));
		}
	};
	return (
		<>
			{createObjectURL !== '' ? (
				<ShowImageContent
					onClick={() => setCreateObjectURL('')}
					width={96}
					height={108}
					src={createObjectURL}
					alt={'사용자가 지정한 가게사진'}
				/>
			) : (
				<ProductImageContainer
					type="button"
					onClick={() => {
						productImgRef.current?.click();
					}}
				>
					<AddPhotoIcon />
					<input type="file" ref={productImgRef} onChange={uploadToClient} style={{ display: 'none' }} />
				</ProductImageContainer>
			)}
		</>
	);
};
export default ProductImageBtn;
