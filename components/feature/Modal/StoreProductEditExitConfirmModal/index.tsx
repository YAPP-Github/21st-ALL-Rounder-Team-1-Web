import { ConfirmModal } from 'components/feature/Modal';
import { ConfirmModalEvent } from '../Common/ConfirmModal';

const StoreProductEditExitConfirmModal = ({ onCancel, onConfirm }: ConfirmModalEvent) => {
	return (
		<ConfirmModal
			modalTitle="사이트에서 나가시겠습니까?"
			modalDescription="임시저장을 하지 않으면 변경사항이 저장되지 않습니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel,
				},
				confirm: {
					text: '나가기',
					onConfirm,
				},
			}}
		/>
	);
};

export default StoreProductEditExitConfirmModal;
