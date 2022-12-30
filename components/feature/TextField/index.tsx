import { useState } from 'react';
import { StyledMessage, StyledTextFiled, TextFieldContainer } from './styled';

interface Props {
	placeholder: string;
	flag?: string; // normal , success , error
	width: React.CSSProperties;
}
const TextField = ({ placeholder, width, ...props }: Props) => {
	const [flag, setFlag] = useState(props.flag);
	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};
	return (
		<TextFieldContainer>
			<StyledTextFiled onFocus={handleError} flag={flag} style={width} placeholder={placeholder} type="search" />
			{flag === 'error' && <StyledMessage>경고메시지 자리에요</StyledMessage>}
		</TextFieldContainer>
	);
};
export default TextField;
