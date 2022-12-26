import React from 'react';
import { StyledLayout } from 'components/shared';
import * as S from './styled';

const Footer = () => {
	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.InnerWrapper display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
					<S.LegalDescWrapper>
						<S.Anchor>서비스 이용약관</S.Anchor>
						<S.Divider direction="vertical" width="18px" border="0.5px solid #D9D9D9" margin="10px" backgroundColor="#000000" />
						<S.Anchor>개인정보 처리방침</S.Anchor>
					</S.LegalDescWrapper>
					<S.ChannelDescWrapper>
						<S.Anchor>우리단체 이름자리</S.Anchor>
						<S.Anchor>자세히보기</S.Anchor>
					</S.ChannelDescWrapper>
				</S.InnerWrapper>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default React.memo(Footer);
