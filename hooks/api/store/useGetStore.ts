import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { useQuery } from '@tanstack/react-query';
import { StoreGet } from 'store/actions/step2Store';

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
	businessHours: string;
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

export const useGetStore = (changeTrigger: boolean) => {
	return useQuery([getStoreQueryKey, changeTrigger], async () => await getStore());
};
