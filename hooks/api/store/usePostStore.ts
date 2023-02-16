import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';

export interface StorePostResponse extends APIResponse {
	data: {
		storeId: number;
		imgStoreIds: number[];
	};
}

export type StoreData = {
	name: string;
	latitude: string;
	longitude: string;
	businessHours: string;
	notice: string;
	address: string;
	imgPath: string[] | null;
	instaAccount: string | null;
	callNumber: string;
	registrationNumber: string;
};
export const postStore = async (storeData: StoreData) => {
	const {
		user: { store },
	} = API_PATH;
	const response = await pumpClientRequester<StorePostResponse>({
		method: HTTP_METHOD.POST,
		url: `${store}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
		data: {
			storeData,
		},
	});

	return response.data.data;
};
