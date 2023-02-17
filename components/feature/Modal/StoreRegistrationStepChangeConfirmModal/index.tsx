import { ConfirmModal } from 'components/feature/Modal';
import { ConfirmModalEvent } from '../Common/ConfirmModal';

const StoreRegistrationStepChangeConfirmModal = ({ onCancel, onConfirm }: ConfirmModalEvent) => {
	return (
		<ConfirmModal
			modalTitle="다음 단계로 이동하시겠습니까 ?"
			modalDescription="다음 단계로 이동 시 현재 페이지의 정보 수정이 불가능합니다."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel,
				},
				confirm: {
					text: '다음단계',
					onConfirm,
				},
			}}
		/>
	);
};

export default StoreRegistrationStepChangeConfirmModal;
