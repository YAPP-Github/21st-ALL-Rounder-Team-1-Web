import { useState } from 'react';
import * as S from './styled';

type Props = {
	name: string;
	placeholder?: string;
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
		<S.TextFieldContainer>
			<S.StyledTextFiled
				name={name}
				id={name}
				onFocus={handleError}
				flag={flag}
				onChange={onChange}
				style={width}
				value={value}
				placeholder={placeholder ?? '입력해주세요'}
				type="search"
			/>
			{flag === 'error' && <S.StyledMessage>경고메시지 자리에요</S.StyledMessage>}
		</S.TextFieldContainer>
	);
};
export default TextField;
