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
	sessionStorage.removeItem('accessToken');
	sessionStorage.removeItem('refreshToken');
};
