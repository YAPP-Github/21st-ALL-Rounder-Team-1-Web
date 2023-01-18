import React from 'react';
import { StyledLayout, Typography } from 'components/shared';
import * as S from './styled';
import { ArrowRightIcon } from 'public/static/icons';
import theme from 'styles/theme';

const REFERCENCE_LINKS = {
	SERVICE_INTRODUCE: 'https://heliotrope-decision-218.notion.site/Pump-8d0eb93581d640799030a34cbff082c0',
	SERVICE_TERMS: 'https://heliotrope-decision-218.notion.site/4c15be8a033e4d5ba1f413712d2e4aff',
	SERVICE_POLICY: 'https://heliotrope-decision-218.notion.site/d8dc6eba03a5432c98d618f03508aa24',
} as const;

const Footer = () => {
	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.InnerWrapper display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
					<S.LegalDescWrapper>
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_TERMS} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="body_oneline_003" color={theme.colors.gray_006}>
								서비스 이용약관
							</Typography>
						</S.Anchor>
						<S.Divider direction="vertical" width="18px" border="0.5px solid #D9D9D9" margin="10px" backgroundColor="#000000" />
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_POLICY} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="tab_001" color={theme.colors.gray_006}>
								개인정보 처리방침
							</Typography>
						</S.Anchor>
					</S.LegalDescWrapper>
					<S.ChannelDescWrapper>
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_INTRODUCE} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="tab_001" color={theme.colors.gray_006}>
								Pump 자세히보기
							</Typography>
							<ArrowRightIcon className="service-introduce-btn" />
						</S.Anchor>
					</S.ChannelDescWrapper>
				</S.InnerWrapper>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default React.memo(Footer);
