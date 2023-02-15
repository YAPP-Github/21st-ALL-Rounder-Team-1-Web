import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { useQuery } from '@tanstack/react-query';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { APIResponse } from 'types/api';

export type UserSession = {
	createdAt: string | null;
	modifiedAt: string | null;
	id: number | null;
	name: string | null;
	nickname: string | null;
	email: string | null;
	phoneNumber: string | null;
	type: string | null; // 'USER' | 'BOSS';
	oauthType: string | null; // KAKAO | NAVER
	oauthIdentity: string | null;
	rating: number | null;
	imgPath: string | null;
};
export interface UserSessionResponse extends APIResponse {
	data: UserSession;
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

	return response.data.data;
};

const GET_USER_SESSION_CACHE_TIME = 60 * 60 * 1000; // 60 minutes
const GET_USER_SESSION_STALE_TIME = 59 * 60 * 1000; // 59 minutes

export const useGetUserSession = () => {
	return useQuery([getUserSessionQueryKey], async () => await getUserSession(), {
		retry: 1,
		cacheTime: GET_USER_SESSION_CACHE_TIME,
		staleTime: GET_USER_SESSION_STALE_TIME,
	});
};

interface UserDeleteResponse extends APIResponse {
	data: {
		userId: number;
	};
}

export const deleteUserSession = async () => {
	const {
		user: { index },
	} = API_PATH;

	const response = await pumpClientRequester<UserDeleteResponse>({
		method: HTTP_METHOD.DELETE,
		url: `${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data;
};
