import { ConfirmModal } from 'components/feature/Modal';

const StoreRegistrationExitConfirmModal = () => {
	return (
		<ConfirmModal
			modalTitle="사이트에서 나가시겠습니까?"
			modalDescription={
				<>
					이탈 시 입력한 데이터가 모두 삭제됩니다.
					<br />
					(임시저장은 Step 3에서 가능합니다.)
				</>
			}
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

export default StoreRegistrationExitConfirmModal;
