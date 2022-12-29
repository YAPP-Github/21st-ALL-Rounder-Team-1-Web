import { ConfirmModal } from 'components/feature/Modal';

const StoreResistrationConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="입력하신 정보로 입점신청 하시겠습니까?"
			modalDescription="입점 승인을 기다리는 동안은 정보 수정이 어려워요."
			modalBtn={{
				cancel: {
					text: '취소',
					onCancel: () => {},
				},
				confirm: {
					text: '신청',
					onConfirm: () => {},
				},
			}}
		/>
	);
};

export default StoreResistrationConfirmModal;
