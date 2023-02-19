import { useQuery } from '@tanstack/react-query';
import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { APIResponse } from 'types/api';
import { getUserTokenFromLocalStorage } from 'utils/storage';

type StoreImage = {
	id: number;
	storeId: number;
	path: string;
};

export type Store = {
	createdAt: string;
	modifiedAt: string;
	id: number;
	userId: number;
	name: string;
	status: string;
	latitude: string;
	longitude: string;
	businessHour: string;
	notice: string;
	address: string;
	instaAccount: string | null;
	callNumber: string;
	registrationNumber: string;
	isDayOff: boolean;
	isReady: boolean;
	imgStore: Array<{
		createdAt: string;
		modifiedAt: string | null;
		id: number;
		storeId: number;
		path: string;
	}> | null;
};

export interface StoreGetResponse extends APIResponse {
	data: {
		result: Store | null;
	};
}

export const getStore = async () => {
	const {
		user: { store },
	} = API_PATH;

	const response = await pumpClientRequester<StoreGetResponse>({
		method: HTTP_METHOD.GET,
		url: `${store}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data.result;
};

export const getStoreQueryKey = 'get/store';

export const useGetStore = (query?: string) => {
	if (!query) {
		return useQuery([getStoreQueryKey], async () => await getStore());
	} else {
		return useQuery([getStoreQueryKey], async () => await getStore(), {
			enabled: !!query,
		});
	}
};

export const getStoreInMyPageQueryKey = 'get/store/mypage';

export const useGetStoreInMyPage = (changeTrigger: boolean) => {
	return useQuery([getStoreInMyPageQueryKey, changeTrigger], async () => await getStore());
};
