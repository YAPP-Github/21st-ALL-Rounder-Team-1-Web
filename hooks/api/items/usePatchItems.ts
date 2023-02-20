import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { ItemsPostResponse, ItemsRequest } from './usePostItems';

export const patchItems = async (storeId: number, items: ItemsRequest[]) => {
	const {
		product: { index },
	} = API_PATH;
	const response = await pumpClientRequester<ItemsPostResponse>({
		method: HTTP_METHOD.POST,
		url: `${storeId}${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
		data: items,
	});

	return response.data.data;
};
