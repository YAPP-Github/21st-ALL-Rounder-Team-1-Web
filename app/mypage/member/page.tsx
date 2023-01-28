'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MyPageSectionLeaveMember, LeaveMemberConfirmModal, LeaveMemberSuccessModal } from 'components/feature';
import { StyledLayout, Typography } from 'components/shared';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';

const MemberManagement = () => {
	const { data } = useSession();
	const router = useRouter();

	const { modalKey, changeModalKey } = useModalStore();

	const handleLeaveMemberConfirm = () => {
		// 회원 탈퇴 API 요청 성공 시
		changeModalKey(MODAL_KEY.ON_LEAVE_MEMBER_SUCCESS_MODAL);
	};

	const handleLeaveMemberSuccess = () => {
		router.push('/');
		changeModalKey(MODAL_KEY.OFF);
	};

	return (
		<StyledLayout.FlexBox flexDirection="column">
			<Typography variant="h2" aggressive="headline_oneline_003" margin="84px 0 20px 0">
				내 정보 관리
			</Typography>

			<MyPageSectionLeaveMember memberEmail={data?.user?.email} />

			{modalKey === MODAL_KEY.ON_LEAVE_MEMBER_CONFIRM_MODAL && (
				<LeaveMemberConfirmModal onCancel={() => changeModalKey(MODAL_KEY.OFF)} onConfirm={handleLeaveMemberConfirm} />
			)}
			{modalKey === MODAL_KEY.ON_LEAVE_MEMBER_SUCCESS_MODAL && <LeaveMemberSuccessModal onClick={handleLeaveMemberSuccess} />}
		</StyledLayout.FlexBox>
	);
};

export default MemberManagement;
