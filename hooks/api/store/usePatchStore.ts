import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { StorePostResponse } from './usePostStore';

export type StorePatchData = {
	id: number;
	name: string;
	latitude: string;
	longitude: string;
	businessHours: string;
	notice: string;
	address: string;
	imgPath: string[];
	instaAccount: string;
	callNumber: string;
	registrationNumber: string;
};
export const patchStore = async (storeData: StorePatchData) => {
	const {
		user: { store },
	} = API_PATH;
	const response = await pumpClientRequester<StorePostResponse>({
		method: HTTP_METHOD.PATCH,
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
