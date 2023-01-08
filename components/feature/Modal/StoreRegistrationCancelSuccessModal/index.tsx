import { InfoModal } from 'components/feature/Modal';

const StoreRegistrationCancelSuccessModal = () => {
	return (
		<InfoModal
			modalTitle="입점 철회되었습니다."
			modalDescription="다음에 더 좋은 모습으로 만나요."
			modalBtn={{
				type: 'primary',
				text: '확인',
				onClick: () => {},
			}}
		/>
	);
};

export default StoreRegistrationCancelSuccessModal;
