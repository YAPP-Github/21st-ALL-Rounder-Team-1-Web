import { Typography } from 'components/shared';
import { EmptyBoxDivider } from 'components/shared/styled/layout';
import * as S from './styled';

type Props = {
	query: string | null;
	pathname: string | null;
};
const RegistrationHeader = ({ query, pathname }: Props) => {
	return (
		<>
			<EmptyBoxDivider height="32px" />

			{query === '' && (
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
			)}
			{query !== '' && pathname === '/registration/step2' && (
				<S.RegistrationHeaderContainer>
					<Typography variant="h1" aggressive="headline_oneline_002">
						가게정보 수정
					</Typography>
					<Typography variant="p" aggressive="body_multiline_002">
						&apos;서비스 명&apos;의 판매 제품 리스트를 수정하는 페이지고, 업데이트는 새벽에 일괄 반영된다.
						<br />즉 실시간 반영이 안된다는 사실! 참고하십시요~~ 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미
						텍스트
					</Typography>
				</S.RegistrationHeaderContainer>
			)}
			{query !== '' && pathname === '/registration/step3' && (
				<S.RegistrationHeaderContainer>
					<Typography variant="h1" aggressive="headline_oneline_002">
						판매제품 수정
					</Typography>
					<Typography variant="p" aggressive="body_multiline_002">
						&apos;서비스 명&apos;의 판매 제품 리스트를 수정하는 페이지고, 업데이트는 새벽에 일괄 반영된다.
						<br />즉 실시간 반영이 안된다는 사실! 참고하십시요~~ 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트 더미
						텍스트
					</Typography>
				</S.RegistrationHeaderContainer>
			)}
		</>
	);
};
export default RegistrationHeader;
