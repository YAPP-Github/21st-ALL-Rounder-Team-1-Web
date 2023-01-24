'use client';

import { useSession } from 'next-auth/react';
import { MyPageSectionLeaveMember } from 'components/feature';
import { StyledLayout, Typography } from 'components/shared';

const MemberManagement = () => {
	const { data } = useSession();

	return (
		<StyledLayout.FlexBox flexDirection="column">
			<Typography variant="h2" aggressive="headline_oneline_003" margin="84px 0 20px 0">
				내 정보 관리
			</Typography>

			<MyPageSectionLeaveMember memberEmail={data?.user?.email} />
		</StyledLayout.FlexBox>
	);
};

export default MemberManagement;
