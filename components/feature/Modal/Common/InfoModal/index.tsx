import { LargeBtn, ModalFrame, Typography } from 'components/shared';
import { ReactNode } from 'react';
import style from 'styles/style';

export type InfoModalEvent = {
	onClick: () => void;
};

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
			<h3 className="modal-title">
				<Typography variant="h3" aggressive={'headline_oneline_004'}>
					{props.modalTitle}
				</Typography>
			</h3>
			<p className="modal-description">
				<Typography variant="p" aggressive={'body_oneline_002'}>
					{props.modalDescription}
				</Typography>
			</p>

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
