import { InfoModal } from 'components/feature/Modal';

const StoreProductRequiredWarningModal = () => {
	return (
		<InfoModal
			modalTitle="상품 정보를 입력해야 임시저장이 가능합니다."
			modalDescription="최소 한 개 이상의 상품을 입력해주세요."
			modalBtn={{
				type: 'normal',
				text: '확인',
				onClick: () => {},
			}}
		/>
	);
};

export default StoreProductRequiredWarningModal;
