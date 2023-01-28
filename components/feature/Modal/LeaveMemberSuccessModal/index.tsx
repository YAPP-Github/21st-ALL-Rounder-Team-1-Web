import { InfoModal } from 'components/feature/Modal';
import { InfoModalEvent } from 'components/feature/Modal/Common/InfoModal';

const LeaveMemberSuccessModal = ({ onClick }: InfoModalEvent) => {
	return (
		<InfoModal
			modalTitle="회원 탈퇴가 되었습니다."
			modalDescription="다음에 더 좋은 모습으로 찾아뵐게요"
			modalBtn={{
				type: 'primary',
				text: '확인',
				onClick,
			}}
		/>
	);
};

export default LeaveMemberSuccessModal;
