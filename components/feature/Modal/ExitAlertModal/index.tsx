import { ModalFrame, Typography } from 'components/shared';
import { CancelAndDispatchBtnWrapper } from 'components/feature/Modal/styled';

type Props = {
	onSetCloseModal: () => void;
	onDispatch: () => void;
};

const ExitAlertModal = (props: Props) => {
	return (
		<ModalFrame>
			<Typography variant="h3" aggressive="headline_003" padding="0 0 8px 0">
				사이트에서 나가시겠습니까?
			</Typography>
			<Typography variant="p" aggressive="body_oneline_002" padding="0 0 32px 0">
				변경사항이 저장되지 않을 수 있습니다
			</Typography>

			<CancelAndDispatchBtnWrapper>
				<button type="button" onClick={props.onSetCloseModal}>
					취소
				</button>
				<button type="button" onClick={props.onDispatch}>
					나가기
				</button>
			</CancelAndDispatchBtnWrapper>
		</ModalFrame>
	);
};

export default ExitAlertModal;
