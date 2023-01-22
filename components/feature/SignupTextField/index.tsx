import { InputHTMLAttributes } from 'react';
import * as S from './styled';

type Props = InputHTMLAttributes<HTMLInputElement>;

const SignupTextField = (props: Props) => {
	const { type, readOnly, defaultValue } = props;

	return <S.SignupTextField type={type} readOnly={readOnly} defaultValue={defaultValue} />;
};

export default SignupTextField;
