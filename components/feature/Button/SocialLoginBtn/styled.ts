import styled, { CSSProperties } from 'styled-components';

type SocialLoginBtnProps = {
	social: 'kakao' | 'naver';
} & CSSProperties;

export const SocialLoginBtn = styled.button<SocialLoginBtnProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: ${({ height }) => height ?? '60px'};
	border-radius: 8px;
	background-color: ${({ social }) => (social === 'kakao' ? '#FBE54D' : '#03C75A')};
	color: ${({ social }) => (social === 'kakao' ? '#191608' : '#FFFFFF')};
`;
