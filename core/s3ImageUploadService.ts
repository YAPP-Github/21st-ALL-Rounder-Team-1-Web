import { useS3Upload } from 'next-s3-upload';

export const uploadButtonImage = async (fileList: FileList) => {
	const { uploadToS3 } = useS3Upload();

	const files = Array.from(fileList);
	const file = files[0];
	const { url } = await uploadToS3(file);
	return url;
};
