import { ReactNode } from 'react';
import { ModalFrame, LargeBtn } from 'components/shared';
import style from 'styles/style';

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
				<LargeBtn
					style={props.modalBtn.type === 'primary' ? style.btnStyle.primary_btn_001 : style.btnStyle.black_btn}
					onClick={props.modalBtn.onClick}
				>
					{props.modalBtn.text}
				</LargeBtn>
			</div>
		</ModalFrame>
	);
};

export default InfoMoal;
