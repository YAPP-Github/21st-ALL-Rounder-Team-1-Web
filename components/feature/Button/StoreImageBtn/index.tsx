import ShowImageContent from 'components/feature/ShowImageContent';
import { AddPhotoIcon } from 'public/static/icons';
import { RefObject, useRef } from 'react';
import { ErrorMessage, StoreImageContainer } from './styled';
import { StyledMessage } from 'components/feature/TextField/styled';

type Props = {
	inputFlag: 'normal' | 'error';
	clientStoreImageURL: string;
	deleteImage: () => void;
} & React.ComponentProps<'input'>;
const StoreImageBtn = ({ inputFlag, clientStoreImageURL, deleteImage, ...props }: Props) => {
	const storeImgRef = useRef() as RefObject<HTMLInputElement>;
	
	return (
		<>
			{clientStoreImageURL ? (
				<button disabled type="button" name={props.name} value={clientStoreImageURL}>
					<ShowImageContent
						name={props.name}
						id={props.id}
						onClick={deleteImage}
						width={343}
						height={160}
						src={clientStoreImageURL}
						alt="사용자가 지정한 가게사진"
					/>
				</button>
			) : (
				<>
					<StoreImageContainer
						name={props.name}
						id={props.id}
						value={props.value}
						type="button"
						onClick={() => {
							storeImgRef.current?.click();
						}}
						inputFlag={inputFlag}
					>
						<AddPhotoIcon />
						<input type="file" ref={storeImgRef} onChange={props.onChange} style={{ display: 'none' }} />
					</StoreImageContainer>
					{inputFlag === 'error' && <ErrorMessage>사진을 업로드하세요</ErrorMessage>}
				</>
			)}
		</>
	);
};
export default StoreImageBtn;
