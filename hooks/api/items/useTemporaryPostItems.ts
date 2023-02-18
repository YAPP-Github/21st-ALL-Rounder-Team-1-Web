import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { ItemsPostResponse } from './usePostItems';

export const temporaryPostItems = async (storeId: number, items: ItemsRequest[]) => {
	const {
		product: { save },
	} = API_PATH;
	const response = await pumpClientRequester<ItemsPostResponse>({
		method: HTTP_METHOD.POST,
		url: `${storeId}${save}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
		data: {
			items,
		},
	});

	return response.data.data;
};
