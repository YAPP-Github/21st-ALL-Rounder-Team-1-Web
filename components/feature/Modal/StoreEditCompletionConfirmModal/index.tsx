import { ConfirmModal } from 'components/feature/Modal';
import { ConfirmModalEvent } from '../Common/ConfirmModal';

const StoreEditCompletionConfirmModal = ({ onCancel, onConfirm }: ConfirmModalEvent) => {
	return (
		<ConfirmModal
			modalTitle="수정을 완료하시겠습니까 ?"
			modalDescription="수정사항은 앱에 바로 반영됩니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel,
				},
				confirm: {
					text: '수정완료',
					onConfirm,
				},
			}}
		/>
	);
};

export default StoreEditCompletionConfirmModal;
