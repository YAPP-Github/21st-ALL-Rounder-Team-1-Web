import { API_PATH, HTTP_METHOD } from 'core/apis/constants';
import { OAuthResponse } from 'store/actions/oauthStore';
import pumpClientRequester from 'core/apis/axios';
import { APIResponse } from 'types/api';

interface PostJwtTokenByOAuthResponse extends APIResponse {
	data: string;
}

export const postJwtTokenByOAuthResponse = async (oauthResponse: OAuthResponse) => {
	const {
		user: { register },
	} = API_PATH;

	const response = await pumpClientRequester<PostJwtTokenByOAuthResponse>({
		method: HTTP_METHOD.POST,
		url: `${register}`,
		data: oauthResponse,
	});

	return response.data.data;
};
