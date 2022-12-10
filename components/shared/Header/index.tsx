import { usePathname } from 'next/navigation';
import React, { useCallback } from 'react';
import * as S from './styled';

const navigations = [
	{
		id: 1,
		path: '/',
		renderText: 'Home',
	},
	{
		id: 2,
		path: '/registration',
		renderText: 'registration',
	},
	{
		id: 3,
		path: '/mypage',
		renderText: 'mypage',
	},
] as const;

const Header = () => {
	const browserPathname = usePathname() as string;

	const isActivedPage = useCallback(
		(pathname: string) => {
			return browserPathname === pathname;
		},
		[browserPathname],
	);

	return (
		<S.Container>
			<S.GlobalNavigation>
				{navigations.map((navigation) => {
					return (
						<S.NavigationItem key={navigation.id} href={navigation.path} selected={isActivedPage(navigation.path)}>
							{navigation.renderText}
						</S.NavigationItem>
					);
				})}
			</S.GlobalNavigation>
		</S.Container>
	);
};

export default React.memo(Header);
