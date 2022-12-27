import { useState } from 'react';
import { StyledMessage, StyledTextFiled, TextFieldContainer } from './styled';

interface Props {
	placeholder: string;
	isError?: boolean;
	isSuccess?: boolean;
}
const TextField = (props: Props) => {
	const [isError, setIsError] = useState(props.isError);
	const handleError = () => {
		if (!isError) return;
		setIsError((isError) => !isError);
	};
	return (
		<TextFieldContainer>
			<StyledTextFiled onFocus={handleError} isError={isError} placeholder={props.placeholder} type="search" />
			{isError && <StyledMessage>경고메시지 자리에요</StyledMessage>}
		</TextFieldContainer>
	);
};
export default TextField;
