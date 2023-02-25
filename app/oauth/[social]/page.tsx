'use client';

import { LoadingCircleLottie } from 'components/shared';
import { FlexBox } from 'components/shared/styled/layout';
import {
	getNaverAccessToken,
	getOAuthSigninKakaoApi,
	getOAuthSigninNaverApi,
	postKakaoAccessToken,
} from 'hooks/api/auth/useSignin';
import { getUserSession } from 'hooks/api/auth/useUserSession';
import { usePathname, useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import useOAuthResponseStore from 'store/actions/oauthStore';
import useUserSessionStore from 'store/actions/userSessionStore';
import { setUserTokenInLocalStorage } from 'utils/storage';
import { isIncludedURLPattern } from 'utils/urlPattern';

const OAuthCallbackPage = () => {
	const router = useRouter();
	const pathname = usePathname() as string;
	const [isMounted, setIsMounted] = useState(false);
	const { setOAuthResponse } = useOAuthResponseStore();
	const { setUserSession } = useUserSessionStore();

	const handleGetAuthorizationCode = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const authorizationCode = urlParams.get('code') ?? '';
		return authorizationCode;
	};

	const handleOAuthCallback = async () => {
		if (!isMounted) {
			setIsMounted(true);
			return;
		}

		// 1. Get Social & AuthorizationCode
		const authorizationCode = handleGetAuthorizationCode();
		const social = isIncludedURLPattern(pathname, [/\/kakao/]) ? 'kakao' : 'naver';

		// 2. Get AccessToken from Social Platform
		const { access_token } =
			social === 'kakao' ? await postKakaoAccessToken(authorizationCode) : await getNaverAccessToken(authorizationCode);

		// 3. Get JWT from Pump Server
		const userInfoWithJwtToken =
			social === 'kakao' ? await getOAuthSigninKakaoApi(access_token) : await getOAuthSigninNaverApi(access_token);

		// 3. Check Validate Token and Success or Fail Process
		const { name, email, imgPath, oauthIdentity } = userInfoWithJwtToken;
		if (userInfoWithJwtToken.jwt) {
			setUserTokenInLocalStorage(userInfoWithJwtToken.jwt, userInfoWithJwtToken.refreshToken ?? '');

			const userSession = await getUserSession();
			setUserSession(userSession);

			router.replace(`/`);
		} else {
			console.info(name, email, imgPath, oauthIdentity);
			console.error(name, email, imgPath, oauthIdentity);

			setOAuthResponse({
				name,
				email,
				imgPath,
				oauthIdentity,
				type: 'BOSS',
				oauthType: social.toUpperCase(),
			});
			router.replace(`/signup`);
		}
	};

	useLayoutEffect(() => {
		handleOAuthCallback();
	}, [isMounted]);

	return (
		<FlexBox width={'100%'} height={'calc(100vh - 257px)'} justifyContent={'center'} alignItems={'center'}>
			<div style={{ width: '4rem' }}>
				<LoadingCircleLottie />
			</div>
		</FlexBox>
	);
};

export default OAuthCallbackPage;
