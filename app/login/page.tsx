'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { StyledLayout, Typography } from 'components/shared';
import { SocialLoginBtn } from 'components/feature';
import { KakaoSymbolImg, NaverSymbolImg } from 'public/static/images';

const Login = () => {
	const handleSocialLogin = (social: 'kakao' | 'naver') => {
		// social login routing
	};

	return (
		<StyledLayout.MaxContainer>
			<InnerContainer>
				<Typography variant="h2" aggressive="headline_multiline_002" margin="0 0 48px 0" align="center">
					반가워요!
					<br />
					계정을 선택해주세요.
				</Typography>
				<SocialLoginBtnWrapper>
					<SocialLoginBtn social="naver" onSocialLogin={handleSocialLogin}>
						<SoicalLoginBtnContents>
							<Image src={NaverSymbolImg} alt="" />
							네이버로 로그인하기
						</SoicalLoginBtnContents>
					</SocialLoginBtn>
					<SocialLoginBtn social="kakao" onSocialLogin={handleSocialLogin}>
						<SoicalLoginBtnContents>
							<Image src={KakaoSymbolImg} alt="" />
							카카오로 로그인하기
						</SoicalLoginBtnContents>
					</SocialLoginBtn>
				</SocialLoginBtnWrapper>
			</InnerContainer>
		</StyledLayout.MaxContainer>
	);
};

export default Login;

const InnerContainer = styled(StyledLayout.FlexBox)`
	display: flex;
	flex-direction: column;
	max-width: 463px;
	margin: 0 auto;
	margin-top: 214px;
	padding: 56px 32px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 16px;
`;

const SocialLoginBtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 400px;
	margin: 0 auto;
`;
const SoicalLoginBtnContents = styled.span`
	display: flex;
	align-items: center;
	gap: 8px;
	height: fit-content;
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
`;
