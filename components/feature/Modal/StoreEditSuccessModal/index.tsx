import { InfoModal } from 'components/feature/Modal';

const StoreEditSuccessModal = () => {
	return (
		<InfoModal
			modalTitle="가게정보 수정이 완료되었습니다."
			modalDescription="앱에서 변경된 사항을 확인해보세요."
			modalBtn={{
				type: 'normal',
				text: '확인',
				onClick: () => {},
			}}
		/>
	);
};

export default StoreEditSuccessModal;
