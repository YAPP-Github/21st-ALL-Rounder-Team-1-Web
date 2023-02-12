import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';

export interface ManagerPatchResponse extends APIResponse {
	data: {
		result: Manager | null;
	};
}

export type Manager = {
	createdAt: string;
	modifiedAt: string;
	id: number;
	name: string;
	nickname: string;
	email: string;
	phoneNumber: string;
	type: 'BOSS';
	oauthType: string;
	oauthIdentity: string;
	rating: byte;
	imgPath: string;
	removedAt: null;
};

export const patchManager = async () => {
	const {
		user: { manager },
	} = API_PATH;

	const response = await pumpClientRequester<ManagerPatchResponse>({
		method: HTTP_METHOD.PATCH,
		url: `${manager}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
	});

	return response.data.data.result;
};
