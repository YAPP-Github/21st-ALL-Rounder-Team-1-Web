'use client';

import * as S from './styled';
import { StyledLayout, Typography } from 'components/shared';
import { theme } from 'styles';
import { EmblemKakaoIcon, EmblemNaverIcon } from 'public/static/icons';
import { getSocialPlatformType } from 'core/signupService';
import { usePathname } from 'next/navigation';
import useUserSessionStore from 'store/actions/userSessionStore';

const myPageNavigations = [
	{
		id: 1,
		path: '/mypage/store',
		renderText: '매장 및 상품 정보 관리',
	},
	{
		id: 2,
		path: '/mypage/member',
		renderText: '내 정보 관리',
	},
] as const;

const MyPageSideBar = () => {
	const pathname = usePathname();
	const { userSession } = useUserSessionStore();

	return (
		<S.MyPageSideBar>
			<StyledLayout.FlexBox flexDirection="column" margin="0 0 46px 0">
				<Typography variant="span" aggressive="headline_oneline_004" margin="0 0 4px 0">
					{userSession.name ?? userSession.nickname}님
				</Typography>
				<StyledLayout.FlexBox alignItems="center" gap="4px">
					<Typography variant="span" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						{userSession.email}
					</Typography>

					{getSocialPlatformType(userSession.email) === 'Naver' ? <EmblemNaverIcon /> : <EmblemKakaoIcon />}
				</StyledLayout.FlexBox>
			</StyledLayout.FlexBox>

			<StyledLayout.FlexBox flexDirection="column">
				{myPageNavigations.map((myPageNavigation) => {
					return (
						<S.MyPageNavigation
							href={myPageNavigation.path}
							key={myPageNavigation.id}
							padding="14px 0"
							color={pathname === myPageNavigation.path ? theme.colors.primary_010 : theme.colors.gray_007}
						>
							<Typography variant="span" aggressive="headline_oneline_004">
								{myPageNavigation.renderText}
							</Typography>
						</S.MyPageNavigation>
					);
				})}
			</StyledLayout.FlexBox>
		</S.MyPageSideBar>
	);
};

export default MyPageSideBar;
