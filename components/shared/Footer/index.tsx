import React from 'react';
import { StyledLayout, Typography } from 'components/shared';
import * as S from './styled';
import { ArrowRight } from 'public/static/icons';
import theme from 'styles/theme';

const Footer = () => {
	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.InnerWrapper display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
					<S.LegalDescWrapper>
						<S.Anchor href="">
							<Typography variant="span" aggressive="body_oneline_003" color={theme.colors.gray_006}>
								서비스 이용약관
							</Typography>
						</S.Anchor>
						<S.Divider direction="vertical" width="18px" border="0.5px solid #D9D9D9" margin="10px" backgroundColor="#000000" />
						<S.Anchor href="">
							<Typography variant="span" aggressive="button_001" color={theme.colors.gray_006}>
								개인정보 처리방침
							</Typography>
						</S.Anchor>
					</S.LegalDescWrapper>
					<S.ChannelDescWrapper>
						<S.Anchor href="">
							<Typography variant="span" aggressive="button_001" color={theme.colors.gray_006}>
								Pump 자세히보기
							</Typography>
							<ArrowRight className="service-introduce-btn" />
						</S.Anchor>
					</S.ChannelDescWrapper>
				</S.InnerWrapper>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default React.memo(Footer);
