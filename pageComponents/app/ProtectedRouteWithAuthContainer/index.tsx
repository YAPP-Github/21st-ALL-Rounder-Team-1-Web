import { useGetUserSession } from 'hooks/api/auth/useUserSession';
import { NextPage } from 'next';
import { ReactNode, useEffect } from 'react';
import useUserSessionStore from 'store/actions/userSessionStore';
import { getUserTokenFromLocalStorage } from 'utils/storage';

const ProtectedRouteWithAuthContainer = ({ children }: { children: NextPage | ReactNode }) => {
	const { data: userSessionFetch } = useGetUserSession(getUserTokenFromLocalStorage());
	const { setUserSession } = useUserSessionStore();

	useEffect(() => {
		if (userSessionFetch) {
			setUserSession(userSessionFetch);
		}
	}, [userSessionFetch]);

	return <>{children}</>;
};

export default ProtectedRouteWithAuthContainer;
