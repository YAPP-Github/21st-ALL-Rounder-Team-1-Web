import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const initialAxiosInstanceOptionMap = {
	baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
	timeout: 1000 * 10,
};

const pumpServiceAxiosInstance = axios.create({
	...initialAxiosInstanceOptionMap,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default async function pumpClientRequester<Payload>(option: AxiosRequestConfig) {
	const response: AxiosResponse<Payload> = await pumpServiceAxiosInstance({
		...option,
	});

	return {
		status: response.status,
		headers: response.headers,
		payload: response.data,
	};
}
