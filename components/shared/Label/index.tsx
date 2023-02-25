import * as S from './styled';

type Props = {
	htmlFor: string;
	width?: string;
	height?: string;
	borderRadius?: string;
};

const Label = ({ htmlFor, width, height, borderRadius }: Props) => {
	return <S.Label htmlFor={htmlFor} width={width} height={height} borderRadius={borderRadius} />;
};

export default Label;
