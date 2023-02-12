import { useGetUserSession, UserSession } from 'hooks/api/auth/useUserSession';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import useUserSessionStore from 'store/actions/userSessionStore';
import { getUserTokenFromLocalStorage } from 'utils/storage';

const PrivateRoute = (Component: NextPage | React.FC) => {
	const Auth = () => {
		const router = useRouter();
		const token = getUserTokenFromLocalStorage();
		const { data } = useGetUserSession();
		const { setUserSession } = useUserSessionStore();

		useEffect(() => {
			if (!token) {
				router.replace('/signin');
			} else {
				setUserSession(data as UserSession);
			}
		}, []);

		return token ? <Component /> : null;
	};

	return Auth;
};

export default PrivateRoute;
