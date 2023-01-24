import React from 'react';
import Image from 'next/image';
import { StyledLayout } from 'components/shared';
import * as S from './styled';
import { PumpLogo } from 'public/static/images';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
	const { status } = useSession();

	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.GlobalNavigation>
					<S.LogoWrapper href={'/'} hrefLang={'ko'}>
						<span className="visually-hidden">Pump 사이트 로고 이미지</span>
						<Image src={PumpLogo} alt="Pump Logo" width={110} height={50} priority />
					</S.LogoWrapper>

					<StyledLayout.UnorderList gap={'40px'}>
						{status === 'unauthenticated' && (
							<S.NavigationItem>
								<StyledLayout.LinkWrapper href={'/signin'}>로그인</StyledLayout.LinkWrapper>
							</S.NavigationItem>
						)}

						{status === 'authenticated' && (
							<>
								<S.NavigationItem>
									<StyledLayout.LinkWrapper href={'/mypage/store'}>마이페이지</StyledLayout.LinkWrapper>
								</S.NavigationItem>
								<S.NavigationItem>
									<S.LogoutBtn type="button" onClick={async () => await signOut()}>
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

export default React.memo(Header);
