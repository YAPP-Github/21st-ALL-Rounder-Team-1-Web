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
			{query === '' ||
				(query?.includes('storeId') && (
					<S.RegistrationHeaderContainer>
						<Typography variant="h1" aggressive="headline_oneline_002">
							입점신청서
						</Typography>
						<Typography variant="p" aggressive="body_multiline_002">
							입점 신청서 작성을 완료하고 [입점신청] 버튼을 누르면, 별도의 승인 절차 없이 Pump에 입점 하실 수 있습니다. 입력한
							정보는 앱에
							<br />
							실시간으로 반영되며, 이후 마이페이지에서 자유롭게 관리(정보 수정, 추가 등) 하실 수 있습니다.
						</Typography>
					</S.RegistrationHeaderContainer>
				))}
			{query?.includes('isReady') && pathname === '/registration/step2' && (
				<S.RegistrationHeaderContainer>
					<Typography variant="h1" aggressive="headline_oneline_002">
						가게정보 수정
					</Typography>
					<Typography variant="p" aggressive="body_multiline_002">
						매장정보 수정 매장의 운영 정보를 자유롭게 수정, 추가 또는 삭제할 수 있는 페이지입니다. <br />
						[수정완료] 버튼을 누르면 변경 사항이 앱에 바로 반영됩니다.
					</Typography>
				</S.RegistrationHeaderContainer>
			)}
			{query?.includes('isReady') && pathname === '/registration/step3' && (
				<S.RegistrationHeaderContainer>
					<Typography variant="h1" aggressive="headline_oneline_002">
						판매상품 수정
					</Typography>
					<Typography variant="p" aggressive="body_multiline_002">
						등록한 판매상품 정보를 자유롭게 수정, 추가 또는 삭제할 수 있는 페이지입니다.
						<br /> [수정완료] 버튼을 누르면 변경 사항이 앱에 바로 반영됩니다.
					</Typography>
				</S.RegistrationHeaderContainer>
			)}
		</>
	);
};
export default RegistrationHeader;
