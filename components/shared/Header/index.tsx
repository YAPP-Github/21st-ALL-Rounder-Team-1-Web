import { memo, useEffect } from 'react';
import Image from 'next/image';
import { StyledLayout } from 'components/shared';
import * as S from './styled';
import { PumpLogo } from 'public/static/images';
import { removeUserTokenInLocalStorage } from 'utils/storage';
import useUserSessionStore, { initialState } from 'store/actions/userSessionStore';
import { useRouter } from 'next/navigation';
import { useGetUserSession } from 'hooks/api/auth/useUserSession';
import Link from 'next/link';

const Header = () => {
	const { userSession } = useUserSessionStore();

	const handleLogoutClick = () => {
		removeUserTokenInLocalStorage();
	};

	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.GlobalNavigation>
					<S.LogoWrapper href={'/'} hrefLang={'ko'}>
						<span className="visually-hidden">Pump 사이트 로고 이미지</span>
						<Image src={PumpLogo} alt="Pump Logo" width={110} height={50} priority />
					</S.LogoWrapper>

					<StyledLayout.UnorderList gap={'40px'}>
						{!userSession?.id && (
							<S.NavigationItem>
								<StyledLayout.LinkWrapper href={'/signin'} replace>
									로그인
								</StyledLayout.LinkWrapper>
							</S.NavigationItem>
						)}

						{userSession?.id && (
							<>
								<S.NavigationItem>
									<StyledLayout.LinkWrapper href={'/mypage/store'}>마이페이지</StyledLayout.LinkWrapper>
								</S.NavigationItem>
								<S.NavigationItem>
									<Link href="/" target="_top" onClick={handleLogoutClick}>
										로그아웃
									</Link>
								</S.NavigationItem>
							</>
						)}
					</StyledLayout.UnorderList>
				</S.GlobalNavigation>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default memo(Header);
