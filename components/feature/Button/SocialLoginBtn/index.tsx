import { ReactNode } from 'react';
import * as S from './styled';

type Props = {
	social: 'kakao' | 'naver';
	children: ReactNode;
	onSocialLogin: (social: 'kakao' | 'naver') => void;
};

const SocialLoginBtn = ({ social, children, onSocialLogin }: Props) => {
	return (
		<S.SocialLoginBtn social={social} onClick={() => onSocialLogin(social)}>
			{children}
		</S.SocialLoginBtn>
	);
};

export default SocialLoginBtn;
