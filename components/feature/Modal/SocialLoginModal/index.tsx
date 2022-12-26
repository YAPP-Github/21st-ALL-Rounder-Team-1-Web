import { ModalFrame } from 'components/shared';

const SocialLoginModal = () => {
	const onSocialLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
		const { currentTarget } = event;

		if (!(currentTarget instanceof HTMLButtonElement)) return;

		console.info(currentTarget.dataset.social);
	};

	return (
		<ModalFrame>
			<h3 className="modal-social-title">만나서 반가워요!</h3>
			<p className="modal-description">서비스 이용을 위해 로그인이 필요해요</p>

			<div className="modal-social-btn-wrapper">
				<button data-social="naver" type="button" onClick={onSocialLogin}>
					네이버로 로그인하기
				</button>
				<button data-social="kakao" type="button" onClick={onSocialLogin}>
					카카오로 로그인하기
				</button>
			</div>
		</ModalFrame>
	);
};

export default SocialLoginModal;
