import { Typography } from 'components/shared';
import { EmptyBoxDivider } from 'components/shared/styled/layout';
import * as S from './styled';
const RegistrationHeader = () => {
	return (
		<>
			<EmptyBoxDivider height="32px" />
			<S.RegistrationHeaderContainer>
				<Typography variant="h1" aggressive="headline_oneline_002">
					입점신청서
				</Typography>
				<Typography variant="p" aggressive="body_multiline_002">
					&apos;서비스 명&apos;의 리필스테이션 스토어로 입점하기 위한 신청 과정입니다. 입점 신청 후 내부 승인을 거쳐 최종
					등록됩니다.
					<br />
					더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트
				</Typography>
			</S.RegistrationHeaderContainer>
		</>
	);
};
export default RegistrationHeader;
