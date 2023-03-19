import { StyledLayout, Typography } from 'components/shared';
import Image from 'next/image';
import Link from 'next/link';
import { PumpLogo } from 'public/static/images';
import { memo } from 'react';
import useUserSessionStore from 'store/actions/userSessionStore';
import { theme } from 'styles';
import { removeUserTokenInLocalStorage } from 'utils/storage';
import * as S from './styled';

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

					<StyledLayout.UnorderList gap={'40px'} className="!hidden pc:!flex">
						{!userSession?.id && (
							<S.NavigationItem>
								<StyledLayout.LinkWrapper href={'/signin'} replace>
									<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
										로그인
									</Typography>
								</StyledLayout.LinkWrapper>
							</S.NavigationItem>
						)}

						{userSession?.id && (
							<>
								<S.NavigationItem>
									<StyledLayout.LinkWrapper href={'/mypage/store'}>
										<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
											마이페이지
										</Typography>
									</StyledLayout.LinkWrapper>
								</S.NavigationItem>
								<S.NavigationItem>
									<Link href="/" target="_top" onClick={handleLogoutClick}>
										<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
											로그아웃
										</Typography>
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
