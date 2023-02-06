'use client';

import { useRouter } from 'next/navigation';
import { MyPageSectionLeaveMember, LeaveMemberConfirmModal, LeaveMemberSuccessModal } from 'components/feature';
import { StyledLayout, Typography } from 'components/shared';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { deleteUserSession } from 'hooks/api/auth/useUserSession';

const MemberManagement = () => {
	const router = useRouter();

	const { modalKey, changeModalKey } = useModalStore();

	const handleLeaveMemberConfirm = async () => {
		try {
			await deleteUserSession();
			changeModalKey(MODAL_KEY.ON_LEAVE_MEMBER_SUCCESS_MODAL);
		} catch (error) {
			// 회원탈퇴 에러 처리
		}
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

			<MyPageSectionLeaveMember memberEmail={'forzero100@naver.com'} />

			{modalKey === MODAL_KEY.ON_LEAVE_MEMBER_CONFIRM_MODAL && (
				<LeaveMemberConfirmModal onCancel={() => changeModalKey(MODAL_KEY.OFF)} onConfirm={handleLeaveMemberConfirm} />
			)}
			{modalKey === MODAL_KEY.ON_LEAVE_MEMBER_SUCCESS_MODAL && <LeaveMemberSuccessModal onClick={handleLeaveMemberSuccess} />}
		</StyledLayout.FlexBox>
	);
};

export default MemberManagement;
