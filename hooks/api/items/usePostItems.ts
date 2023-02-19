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
			Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE2NzM4OTI5MTcsImV4cCI6MTg1Mzg5MjkxNywidXNlcklkIjoiOCJ9.Er7Lq2dXD95RgQ78kyqlz8uMQpS4AvAGuDm1jlwolys`,
		},
		data: items,
	});

	return response.data.data;
};
