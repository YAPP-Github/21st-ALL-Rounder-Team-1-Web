import ShowImageContent from 'components/feature/ShowImageContent';
import { AddPhotoIcon } from 'public/static/icons';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { StoreImageContainer } from './styled';
import { useS3Upload } from 'next-s3-upload';

type Props = {
	isError: boolean;
};
const StoreImageBtn = ({ isError }: Props) => {
	const storeImgRef = useRef() as RefObject<HTMLInputElement>;
	const [createObjectURL, setCreateObjectURL] = useState('');
	const { uploadToS3 } = useS3Upload();

	const handleFileChange = async (fileList: FileList) => {
		const files = Array.from(fileList);
		const file = files[0];
		console.log(file.name);
		const { url } = await uploadToS3(file);
		console.log(url);
		return url;
	};

	const uploadToClient = async (e: ChangeEvent<HTMLInputElement>) => {
		if (createObjectURL) URL.revokeObjectURL(createObjectURL);
		if (e.target.files !== null) {
			setCreateObjectURL(URL.createObjectURL(e.target.files[0]));

			handleFileChange(e.target.files)
				.then(() => console.log('성공'))
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			{createObjectURL ? (
				<ShowImageContent
					onClick={() => setCreateObjectURL('')}
					width={343}
					height={160}
					src={createObjectURL}
					alt={'사용자가 지정한 가게사진'}
				/>
			) : (
				<StoreImageContainer
					type="button"
					onClick={() => {
						storeImgRef.current?.click();
					}}
					isError={isError}
				>
					<AddPhotoIcon />
					<input type="file" ref={storeImgRef} onChange={uploadToClient} style={{ display: 'none' }} />
				</StoreImageContainer>
			)}
		</>
	);
};
export default StoreImageBtn;
