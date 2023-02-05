export const API_PATH = {
	user: {
		index: '/user',
		register: '/user/register',
		manager: '/user/manager',
	},
	login: {
		index: '/login',
		kakao: '/login/oauth/kakao',
		naver: '/login/oauth/naver',
	},
	store: {
		index: '/store',
	},
	product: {
		index: '/items',
		save: '/items/temporary-save',
	},
} as const;

export const HTTP_METHOD = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
} as const;

// Ref : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
export const HTTP_STATUS_CODE = {
	OK_200: 200,
	CREATED_201: 201,
	NO_CONTENT_204: 204,
	MOVED_PERMANENTLY_301: 301,
	FOUND_302: 302,
	NOT_MODIFIED_304: 304,
	TEMPORARY_REDIRECT_307: 307,
	PERMANENT_REDIRECT_308: 308,
	BAD_REQUEST_400: 400,
	UN_AUTHORIZED_401: 401,
	FORBIDDEN_403: 403,
	NOT_FOUND_404: 404,
	CONFLICT_409: 409,
	INTERNAL_SERVER_ERROR_500: 500,
	NOT_IMPLEMENTED_501: 501,
	BAD_GATEWAY_502: 502,
	GATEWAY_TIMEOUT_504: 504,
};

export const THIRD_PARTY_URL = {
	kakao: 'https://kauth.kakao.com/oauth',
	naver: 'https://nid.naver.com/oauth2.0',
} as const;
