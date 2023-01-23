import { MyPageActionBtn } from 'components/feature';
import { Typography } from 'components/shared';
import * as S from '../styled';

const MyPageSectionEmptyStore = () => {
	return (
		<S.MyPageOneActionDescriptionWrapper>
			<Typography aggressive="body_oneline_004" variant="p">
				아직 등록된 가게가 없습니다. 입점 신청을 해주세요!
			</Typography>
			<MyPageActionBtn buttonTheme="primary" onClick={() => console.info('입점 신청하기 GO')}>
				입점 신청하기
			</MyPageActionBtn>
		</S.MyPageOneActionDescriptionWrapper>
	);
};

export default MyPageSectionEmptyStore;
