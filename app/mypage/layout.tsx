'use client';

import { StyledLayout } from 'components/shared';
import { MyPageSideBar } from 'components/feature';

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledLayout.MaxContainer backgroundColor="#FFFFFF">
			<StyledLayout.FlexBox display="flex">
				<StyledLayout.FlexBox width="260px" height="calc(100vh - 258px)" padding="88px 28px" borderRight="1px solid #F2F2F7">
					<MyPageSideBar />
				</StyledLayout.FlexBox>
				<StyledLayout.FlexBox flex="1" flexDirection="column" padding="0 40px">
					{children}
				</StyledLayout.FlexBox>
			</StyledLayout.FlexBox>
		</StyledLayout.MaxContainer>
	);
};

export default MyPageLayout;
