import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { useQuery } from '@tanstack/react-query';
import { getUserTokenFromLocalStorage } from 'utils/storage';

interface UserSessionResponse {
	createdAt: string;
	modifiedAt: string;
	id: number | null;
	name: string;
	nickname: string;
	email: string;
	phoneNumber: string;
	type: string; // 'USER' | 'BOSS';
	oauthType: string; // KAKAO | NAVER
	oauthIdentity: string;
	rating: number;
	imgPath: string;
}

export const getUserSessionQueryKey = '/getUserSession';

export const getUserSession = async () => {
	const {
		user: { index },
	} = API_PATH;

	const response = await pumpClientRequester<UserSessionResponse>({
		method: HTTP_METHOD.GET,
		url: `${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response;
};

export const useGetUserSession = () => {
	return useQuery([getUserSessionQueryKey], async () => await getUserSession(), {
		retry: 1,
	});
};

export const deleteUserSession = async () => {
	const {
		user: { index },
	} = API_PATH;

	const response = await pumpClientRequester<number>({
		method: HTTP_METHOD.DELETE,
		url: `${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.status;
};