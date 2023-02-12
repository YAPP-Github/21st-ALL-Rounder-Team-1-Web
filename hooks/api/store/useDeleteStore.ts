import { useMutation } from '@tanstack/react-query';
import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { APIResponse } from 'types/api';
import { getUserTokenFromLocalStorage } from 'utils/storage';

interface StoreDeleteResponse extends APIResponse {
	data: {
		storeId: number[];
	};
}

export const deleteStore = async (storeId: number) => {
	const {
		store: { index },
	} = API_PATH;

	const response = await pumpClientRequester<StoreDeleteResponse>({
		method: HTTP_METHOD.DELETE,
		url: `${index}`,
		data: {
			storeId,
		},
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data;
};

export const useDeleteStore = () => {
	return useMutation({
		mutationFn: deleteStore,
	});
};
