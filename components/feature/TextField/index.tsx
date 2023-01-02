import { useState } from 'react';
import { StyledMessage, StyledTextFiled, TextFieldContainer } from './styled';

type Props = {
	name: string;
	placeholder: string;
	flag: string; // normal , success , error
	width: React.CSSProperties;
	value?: string | undefined;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const TextField = ({ placeholder, width, name, value, onChange, ...props }: Props) => {
	const [flag, setFlag] = useState<string>(props.flag);
	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};

	return (
		<TextFieldContainer>
			<StyledTextFiled
				name={name}
				id={name}
				onFocus={handleError}
				flag={flag}
				onChange={onChange}
				style={width}
				value={value}
				placeholder={placeholder}
				type="search"
			/>
			{flag === 'error' && <StyledMessage>경고메시지 자리에요</StyledMessage>}
		</TextFieldContainer>
	);
};
export default TextField;
