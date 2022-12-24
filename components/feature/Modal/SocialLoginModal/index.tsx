import { ModalFrame, Typography } from 'components/shared';
import { SocialLoginBtnWrapper } from 'components/feature/Modal/styled';

const SocialLoginModal = () => {
	const onSocialLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
		const { currentTarget } = event;

		if (!(currentTarget instanceof HTMLButtonElement)) return;

		console.info(currentTarget.dataset.social);
	};

	return (
		<ModalFrame>
			<Typography variant="h3" aggressive="headline_002">
				만나서 반가워요!
			</Typography>
			<Typography variant="p" aggressive="body_oneline_002">
				서비스 이용을 위해 로그인이 필요해요
			</Typography>

			<SocialLoginBtnWrapper>
				<button data-social="naver" type="button" onClick={onSocialLogin}>
					네이버로 로그인하기
				</button>
				<button data-social="kakao" type="button" onClick={onSocialLogin}>
					카카오로 로그인하기
				</button>
			</SocialLoginBtnWrapper>
		</ModalFrame>
	);
};

export default SocialLoginModal;
