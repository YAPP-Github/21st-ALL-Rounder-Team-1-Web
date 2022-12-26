import { StyledTextFiled, TextFieldContainer } from './styled';

const TextField = () => {
	return (
		<TextFieldContainer>
			<StyledTextFiled placeholder="내용을 입력하세요" type="search" />
		</TextFieldContainer>
	);
};
export default TextField;
