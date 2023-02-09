'use client';

import * as S from './styled';
import { StyledLayout, Typography } from 'components/shared';
import { theme } from 'styles';
import { EmblemKakaoIcon, EmblemNaverIcon } from 'public/static/icons';
import { getSocialPlatformType } from 'core/signupService';
import { usePathname } from 'next/navigation';

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

	return (
		<S.MyPageSideBar>
			<StyledLayout.FlexBox flexDirection="column" margin="0 0 46px 0">
				<Typography variant="span" aggressive="headline_oneline_004" margin="0 0 4px 0">
					{'사장'}님
				</Typography>
				<StyledLayout.FlexBox alignItems="center" gap="4px">
					<Typography variant="span" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						{'forzero100@naver.com'}
					</Typography>

					{getSocialPlatformType('forzero100@naver.com') === 'Naver' ? <EmblemNaverIcon /> : <EmblemKakaoIcon />}
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
