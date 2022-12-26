import { ReactNode } from 'react';
import { ModalFrame } from 'components/shared';

type Props = {
	modalTitle: ReactNode;
	modalDescription: ReactNode;
	modalBtn: {
		cancel: {
			text: string;
			onCancel: () => void;
		};
		confirm: {
			text: string;
			onConfirm: () => void;
		};
	};
};

const ConfirmModal = (props: Props) => {
	return (
		<ModalFrame>
			<h3 className="modal-title">{props.modalTitle}</h3>
			<p className="modal-description">{props.modalDescription}</p>

			<div className="modal-btn-multi-wrapper">
				<button type="button" onClick={props.modalBtn.cancel.onCancel}>
					{props.modalBtn.cancel.text}
				</button>
				<button type="button" onClick={props.modalBtn.confirm.onConfirm}>
					{props.modalBtn.confirm.text}
				</button>
			</div>
		</ModalFrame>
	);
};

export default ConfirmModal;
