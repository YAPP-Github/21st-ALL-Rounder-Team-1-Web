import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledLayout } from 'components/shared';
import * as S from './styled';
import { PumpLogo } from 'public/static/images';

const userNavigationItems = [
	{
		id: 1,
		path: '/login',
		renderText: '로그인',
	},
] as const;

const Header = () => {
	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.GlobalNavigation>
					<S.LogoWrapper href={'/'} hrefLang={'ko'}>
						<span className="visually-hidden">Pump 사이트 로고 이미지</span>
						<Image src={PumpLogo} alt="Pump Logo" width={110} height={50} />
					</S.LogoWrapper>

					<StyledLayout.UnorderList>
						{userNavigationItems.map((useNavigationItem) => {
							return (
								<S.NavigationItem key={useNavigationItem.id}>
									<Link href={useNavigationItem.path}>{useNavigationItem.renderText}</Link>
								</S.NavigationItem>
							);
						})}
					</StyledLayout.UnorderList>
				</S.GlobalNavigation>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default React.memo(Header);
