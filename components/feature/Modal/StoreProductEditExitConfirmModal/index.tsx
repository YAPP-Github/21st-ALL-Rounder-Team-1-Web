import { ConfirmModal } from 'components/feature/Modal';

const StoreProductEditExitConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="사이트에서 나가시겠습니까?"
			modalDescription="변경사항이 저장되지 않을 수 있습니다"
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel: () => {},
				},
				confirm: {
					text: '나가기',
					onConfirm: () => {},
				},
			}}
		/>
	);
};

export default StoreProductEditExitConfirmModal;
