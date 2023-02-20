import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { APIResponse } from 'types/api';
import { getUserTokenFromLocalStorage } from 'utils/storage';

export interface ItemsPostResponse extends APIResponse {
	data: {
		itemIds: number[];
	};
}

export type ItemsRequest = {
	id: number;
	title: string | null;
	brand: string | null;
	category: string;
};

export const postItems = async (storeId: number, items: ItemsRequest[]) => {
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
