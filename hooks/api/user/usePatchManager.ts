import { APIResponse } from 'types/api';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import pumpClientRequester from 'core/apis/axios';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { Step1Request } from 'store/actions/step1Store';

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
	rating: number;
	imgPath: string;
	removedAt: null;
};

export const patchManager = async (managerData: Step1Request) => {
	const {
		user: { manager },
	} = API_PATH;
	const response = await pumpClientRequester<ManagerPatchResponse>({
		method: HTTP_METHOD.PATCH,
		url: `${manager}`,
		headers: {
			Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
		},
		data: {
			managerData,
		},
	});

	return response.data.data.result;
};
