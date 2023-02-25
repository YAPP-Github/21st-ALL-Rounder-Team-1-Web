import { ConfirmModal } from 'components/feature/Modal';
import { ConfirmModalEvent } from '../Common/ConfirmModal';

const StoreRegistrationConfirmModal = ({ onCancel, onConfirm }: ConfirmModalEvent) => {
	return (
		<ConfirmModal
			modalTitle="입력하신 정보로 입점신청 하시겠습니까?"
			modalDescription="마이 페이지에서 정보를 수정할 수 있습니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel,
				},
				confirm: {
					text: '신청하기',
					onConfirm,
				},
			}}
		/>
	);
};

export default StoreRegistrationConfirmModal;
