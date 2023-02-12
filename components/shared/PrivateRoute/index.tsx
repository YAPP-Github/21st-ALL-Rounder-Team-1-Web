import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { getUserTokenFromLocalStorage } from 'utils/storage';

const PrivateRoute = (Component: NextPage | React.FC) => {
	const Auth = () => {
		const router = useRouter();
		const token = getUserTokenFromLocalStorage();

		useEffect(() => {
			if (!token) {
				router.replace('/signin');
			}
		}, []);

		return token ? <Component /> : null;
	};

	return Auth;
};

export default PrivateRoute;
