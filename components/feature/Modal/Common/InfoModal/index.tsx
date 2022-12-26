import { ReactNode } from 'react';
import { ModalFrame } from 'components/shared';

type Props = {
	modalTitle: ReactNode;
	modalDescription: ReactNode;
	modalBtn: {
		type: 'normal' | 'primary';
		text: string;
		onClick: () => void;
	};
};

const InfoMoal = (props: Props) => {
	return (
		<ModalFrame>
			<h3 className="modal-title">{props.modalTitle}</h3>
			<p className="modal-description">{props.modalDescription}</p>

			<div className={props.modalBtn.type === 'primary' ? 'modal-primary-btn-single-wrapper' : 'modal-btn-single-wrapper'}>
				<button type="button" onClick={props.modalBtn.onClick}>
					{props.modalBtn.text}
				</button>
			</div>
		</ModalFrame>
	);
};

export default InfoMoal;
