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
			<StyledTextFiled
				onFocus={handleError}
				isError={isError}
				placeholder={props.placeholder}
				type="search"
				disabled={props.isSuccess}
			/>
			{isError && <StyledMessage flag="error">경고 메세지가 들어가는 자리에요</StyledMessage>}
			{props.isSuccess && <StyledMessage flag="success">✓ 입점가능한 사업자 번호입니다.</StyledMessage>}
		</TextFieldContainer>
	);
};
export default TextField;
