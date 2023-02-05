'use client';

import {
	getOAuthSigninKakaoApi,
	getOAuthSigninNaverApi,
	postKakaoAccessToken,
	getNaverAccessToken,
} from 'hooks/api/auth/useSignin';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isIncludedURLPattern } from 'utils/urlPattern';
import { setUserTokenInLocalStorage } from 'utils/storage';
import useOAuthResponseStore from 'store/actions/oauthStore';

const OAuthCallbackPage = () => {
	const router = useRouter();
	const pathname = usePathname() as string;
	const [isMounted, setIsMounted] = useState(false);
	const { setOAuthResponse } = useOAuthResponseStore();

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
			router.push(`/`);
		} else {
			setOAuthResponse({
				name,
				email,
				imgPath,
				oauthIdentity,
				oauthType: social.toUpperCase(),
			});
			router.push(`/signup`);
		}
	};

	const handleGetAuthorizationCode = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const authorizationCode = urlParams.get('code') ?? '';
		return authorizationCode;
	};

	useEffect(() => {
		handleOAuthCallback();
	}, [isMounted]);

	return <div>loading</div>;
};

export default OAuthCallbackPage;
