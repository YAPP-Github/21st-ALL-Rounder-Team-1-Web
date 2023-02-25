const STORAGE_KEY = {
	TOKEN: 'token',
	REFRESH_TOKEN: 'refreshToken',
} as const;

export const setItem = (key: string, item: string) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, item);
	}
};

export const getItem = (key: string) => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem(key) as string;
	}
	return '';
};

export const removeItem = (key: string) => {
	if (typeof window !== 'undefined') localStorage.removeItem(key);
};

export const setUserSession = (accessToken: string, refreshToken: string) => {
	sessionStorage.setItem('accessToken', accessToken);
	sessionStorage.setItem('refreshToken', refreshToken);
};

export const clearUserSession = () => {
	if (typeof window !== 'undefined') {
		sessionStorage.removeItem(STORAGE_KEY.TOKEN);
		sessionStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
	}
};

export const setUserTokenInLocalStorage = (token?: string, refreshToken?: string) => {
	if (typeof window !== 'undefined') {
		if (token) {
			localStorage.setItem(STORAGE_KEY.TOKEN, token);
		}

		if (refreshToken) {
			localStorage.setItem(STORAGE_KEY.REFRESH_TOKEN, refreshToken);
		}
	}
};

export const removeUserTokenInLocalStorage = () => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(STORAGE_KEY.TOKEN);
		localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
	}
};

export const getUserTokenFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem(STORAGE_KEY.TOKEN);
	}

	return '';
};
