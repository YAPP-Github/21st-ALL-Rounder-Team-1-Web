import { ConfirmModal } from 'components/feature/Modal';

const StoreEditCompletionConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="수정을 완료하시겠습니까 ?"
			modalDescription="수정사항은 매일 새벽 00:00시 일괄 반영됩니다. (실시가 반영 X)"
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel: () => {},
				},
				confirm: {
					text: '수정완료',
					onConfirm: () => {},
				},
			}}
		/>
	);
};

export default StoreEditCompletionConfirmModal;
