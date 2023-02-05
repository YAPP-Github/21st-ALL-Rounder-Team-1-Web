import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD, THIRD_PARTY_URL } from 'core/apis/constants';

export type OAuthSigninData = {
	name: string;
	email: string;
	imgPath: string;
	oauthIdentity: string;
	jwt: string;
	refreshToken: null;
};

export interface IOAuthSigninResponse {
	message: string;
	status: number;
	data: OAuthSigninData;
}

export const getOAuthSigninKakaoApi = async (accessToken: string) => {
	const {
		login: { kakao },
	} = API_PATH;

	const { payload } = await pumpClientRequester<IOAuthSigninResponse>({
		method: HTTP_METHOD.GET,
		url: `${kakao}?accessToken=${accessToken}`,
	});

	return payload.data;
};

export const getOAuthSigninNaverApi = async (accessToken: string) => {
	const {
		login: { naver },
	} = API_PATH;

	const { payload } = await pumpClientRequester<IOAuthSigninResponse>({
		method: HTTP_METHOD.GET,
		url: `${naver}?accessToken=${accessToken}`,
	});

	return payload.data;
};

const authSigninQueryKey = '/auth/signin';

export const useOAuthSignin = (social: 'kakao' | 'naver', authorizationCode: string) => {
	const oauthSigninTable = {
		kakao: async () => await getOAuthSigninKakaoApi(authorizationCode),
		naver: async () => await getOAuthSigninNaverApi(authorizationCode),
	};

	const response = useQuery([authSigninQueryKey], oauthSigninTable[social], {
		enabled: !!authorizationCode,
	});

	return response;
};

export const postKakaoAccessToken = async (authorizationCode: string) => {
	const response = await axios.post(
		`${THIRD_PARTY_URL.kakao}/token`,
		{
			grant_type: 'authorization_code',
			client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
			redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/oauth/kakao`,
			code: authorizationCode,
			client_secret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
		},
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		},
	);

	return response.data;
};

export const getNaverAccessToken = async (authorizationCode: string) => {
	const response = await axios.get(
		`${THIRD_PARTY_URL.naver}/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET}&code=${authorizationCode}&state=pump_social_naver`,
		{
			headers: {
				'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
				'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
			},
		},
	);

	return response;
};
