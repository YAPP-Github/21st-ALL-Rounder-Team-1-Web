import pumpClientRequester from 'core/apis/axios';
import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { Step1Request } from 'store/actions/step1Store';
import { APIResponse } from 'types/api';
import { getUserTokenFromLocalStorage } from 'utils/storage';
import { UserSession } from '../auth/useUserSession';

export interface ManagerPatchResponse extends APIResponse {
	data: {
		result: UserSession | null;
	};
}

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
		data: managerData,
	});

	return response.data.data.result;
};
