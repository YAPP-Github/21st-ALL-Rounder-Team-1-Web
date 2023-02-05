import { memo } from 'react';
import Image from 'next/image';
import { StyledLayout } from 'components/shared';
import * as S from './styled';
import { PumpLogo } from 'public/static/images';
import { removeUserTokenInLocalStorage } from 'utils/storage';
import { useGetUserSession } from 'hooks/api/auth/useUserSession';

const Header = () => {
	const { data: userSession } = useGetUserSession();

	const handleLogoutClick = () => {
		removeUserTokenInLocalStorage();
		window.location.reload();
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
						{!userSession && (
							<S.NavigationItem>
								<StyledLayout.LinkWrapper href={'/signin'}>로그인</StyledLayout.LinkWrapper>
							</S.NavigationItem>
						)}

						{userSession && (
							<>
								<S.NavigationItem>
									<StyledLayout.LinkWrapper href={'/mypage/store'}>마이페이지</StyledLayout.LinkWrapper>
								</S.NavigationItem>
								<S.NavigationItem>
									<S.LogoutBtn type="button" onClick={handleLogoutClick}>
										로그아웃
									</S.LogoutBtn>
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
