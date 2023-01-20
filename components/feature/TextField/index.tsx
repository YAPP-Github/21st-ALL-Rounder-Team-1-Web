import { useState } from 'react';
import * as S from './styled';

type Props = {
	flag: 'normal' | 'success' | 'error';
} & React.ComponentProps<'input'>;

const TextField = (props: Props) => {
	const [flag, setFlag] = useState<string>(props.flag);

	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};

	return (
		<S.TextFieldContainer>
			<S.StyledTextFiled
				readOnly={props.readOnly ?? false}
				name={props.name}
				id={props.id}
				onFocus={handleError}
				flag={flag}
				onChange={props.onChange}
				style={{ width: props.width }}
				value={props.value}
				placeholder={props.placeholder ?? '입력해주세요'}
				type="search"
			/>
			{flag === 'error' && <S.StyledMessage>경고메시지 자리에요</S.StyledMessage>}
		</S.TextFieldContainer>
	);
};
export default TextField;
