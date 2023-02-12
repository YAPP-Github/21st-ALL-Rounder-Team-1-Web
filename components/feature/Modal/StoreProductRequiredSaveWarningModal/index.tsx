import { InfoModal } from 'components/feature/Modal';
import { InfoModalEvent } from '../Common/InfoModal';

const StoreProductRequiredSaveWarningModal = ({ onClick }: InfoModalEvent) => {
	return (
		<InfoModal
			modalTitle="상품 정보를 입력해야 입점신청이 가능합니다."
			modalDescription="최소 한 개 이상의 상품을 입력해주세요."
			modalBtn={{
				type: 'normal',
				text: '확인',
				onClick,
			}}
		/>
	);
};

export default StoreProductRequiredSaveWarningModal;
