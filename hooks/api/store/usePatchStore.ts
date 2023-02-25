import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { StorePostResponse } from './usePostStore';

export type StorePatchData = {
	id: number;
	name: string;
	latitude: string;
	longitude: string;
	businessHour: string;
	notice: string;
	address: string;
	imgPath: string[] | null;
	instaAccount: string | null;
	callNumber: string;
	registrationNumber: string;
};
export const patchStore = async (storeData: StorePatchData) => {
	const {
		store: { index },
	} = API_PATH;
	const response = await pumpClientRequester<StorePostResponse>({
		method: HTTP_METHOD.PATCH,
		url: `${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
		data: storeData,
	});

	return response.data.data;
};
