'use client';

import styled from 'styled-components';
import { StyledLayout, Typography } from 'components/shared';
import { SocialLoginBtn } from 'components/feature';
import { SymbolKakaoIcon, SymbolNaverIcon } from 'public/static/icons';
import { THIRD_PARTY_URL } from 'core/apis/constants';

const getSocialAuthorizationCode = (social: 'kakao' | 'naver') => {
	const socialAuthorizationCodeLocationTable = {
		kakao: `${THIRD_PARTY_URL.kakao}/authorize?client_id=${
			process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
		}&redirect_uri=${`${process.env.NEXT_PUBLIC_BASE_URL}/oauth/kakao`}&response_type=code&scope=account_email,profile_image`,
		naver: `${THIRD_PARTY_URL.naver}/authorize?response_type=code&client_id=${
			process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
		}&state=${`pump_social_naver`}&redirect_uri=${`${process.env.NEXT_PUBLIC_BASE_URL}/oauth/naver`}
`,
	};

	window.location.href = socialAuthorizationCodeLocationTable[social] ?? 'http://localhost:3000';
};

const Signin = () => {
	const handleSocialLogin = async (social: 'kakao' | 'naver') => {
		// 1. Get AuthorizationCode from target social platform & redirect to callback page
		getSocialAuthorizationCode(social);
	};

	return (
		<StyledLayout.MaxContainer>
			<StyledLayout.EmptyBoxDivider height={'10vh'} />

			<InnerContainer>
				<Typography variant="h2" aggressive="headline_multiline_002" margin="0 0 48px 0" align="center">
					반가워요!
					<br />
					계정을 선택해주세요.
				</Typography>
				<SocialLoginBtnWrapper>
					<SocialLoginBtn social="naver" onSocialLogin={handleSocialLogin}>
						<SoicalLoginBtnContents>
							<SymbolNaverIcon />
							네이버로 로그인하기
						</SoicalLoginBtnContents>
					</SocialLoginBtn>
					<SocialLoginBtn social="kakao" onSocialLogin={handleSocialLogin}>
						<SoicalLoginBtnContents>
							<SymbolKakaoIcon />
							카카오로 로그인하기
						</SoicalLoginBtnContents>
					</SocialLoginBtn>
				</SocialLoginBtnWrapper>
			</InnerContainer>
		</StyledLayout.MaxContainer>
	);
};

export default Signin;

const InnerContainer = styled(StyledLayout.FlexBox)`
	display: flex;
	flex-direction: column;
	max-width: 463px;
	margin: 0 auto;
	padding: 56px 32px;
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
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
`;
