import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import * as S from '../styled';
import { Typography } from 'components/shared';
import { MyPageActionBtn } from 'components/feature';

type Props = {
	memberEmail?: string | null;
};

const MyPageSectionLeaveMember = (props: Props) => {
	const { changeModalKey } = useModalStore();

	return (
		<S.MyPageOneActionDescriptionWrapper>
			<Typography aggressive="body_oneline_004" variant="p">
				{props.memberEmail} 을 더 이상 사용하지 않으시나요?
			</Typography>
			<MyPageActionBtn buttonTheme="lightgray" onClick={() => changeModalKey(MODAL_KEY.ON_LEAVE_MEMBER_CONFIRM_MODAL)}>
				회원 탈퇴하기
			</MyPageActionBtn>
		</S.MyPageOneActionDescriptionWrapper>
	);
};

export default MyPageSectionLeaveMember;
