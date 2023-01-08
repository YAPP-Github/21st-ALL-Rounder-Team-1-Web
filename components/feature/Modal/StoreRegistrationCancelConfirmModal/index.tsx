import { ConfirmModal } from 'components/feature/Modal';

const StoreRegistrationCancelConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="매장 입점을 철회하시겠습니까 ?"
			modalDescription="매장 입점 철회 시 모든 데이터가 삭제됩니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel: () => {},
				},
				confirm: {
					text: '철회하기',
					onConfirm: () => {},
				},
			}}
		/>
	);
};

export default StoreRegistrationCancelConfirmModal;
