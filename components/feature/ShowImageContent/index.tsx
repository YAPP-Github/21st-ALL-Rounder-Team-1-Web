import { DeleteBar, ShowImageContainer } from './styled';
import Image from 'next/image';
import { CancelIcon } from 'public/static/icons';

type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
} & React.ComponentProps<'image'>;
const ShowImageContent = ({ width, height, src, alt, ...props }: Props) => {
	return (
		<ShowImageContainer width={width} height={height}>
			<Image src={src} alt={alt} width={width} height={height} />
			<DeleteBar width={width}>
				<CancelIcon onClick={props.onClick} />
			</DeleteBar>
		</ShowImageContainer>
	);
};
export default ShowImageContent;
