import { useQuery } from '@tanstack/react-query';
import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { APIResponse } from 'types/api';
import { getUserTokenFromLocalStorage } from 'utils/storage';

export type GetItem = {
	id: number;
	title: string;
	brand: string;
	category: string;
};
export interface ItemsPostResponse extends APIResponse {
	data: GetItem[];
}
export const getItems = async (storeId: number) => {
	const {
		product: { index },
	} = API_PATH;
	const response = await pumpClientRequester<ItemsPostResponse>({
		method: HTTP_METHOD.GET,
		url: `${storeId}${index}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data;
};

export const getItemsQueryKey = 'get/item';

export const useGetItems = (id: number) => {
	return useQuery([getItemsQueryKey], async () => await getItems(id), {
		enabled: !!id,
	});
};
