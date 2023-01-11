import { useState } from 'react';
import * as S from './styled';

type Props = {
	name: string;
	readonly?: boolean;
	placeholder?: string;
	flag: 'normal' | 'success' | 'error';
	width: React.CSSProperties;
	value?: string | undefined;
} & React.HTMLAttributes<HTMLInputElement>;

const TextField = ({ readonly, placeholder, width, name, value, ...props }: Props) => {
	const [flag, setFlag] = useState<string>(props.flag);

	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};

	return (
		<S.TextFieldContainer>
			<S.StyledTextFiled
				readOnly={readonly}
				name={name}
				id={name}
				onFocus={handleError}
				flag={flag}
				onChange={props.onChange}
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
