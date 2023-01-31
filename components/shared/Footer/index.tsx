import React from 'react';
import { StyledLayout, Typography } from 'components/shared';
import { Divider } from 'components/shared/styled/layout';
import * as S from './styled';
import theme from 'styles/theme';
import { InstagramIcon } from 'public/static/icons';

const REFERCENCE_LINKS = {
	SERVICE_INTRODUCE: 'https://heliotrope-decision-218.notion.site/Pump-8d0eb93581d640799030a34cbff082c0',
	SERVICE_TERMS: 'https://heliotrope-decision-218.notion.site/4c15be8a033e4d5ba1f413712d2e4aff',
	SERVICE_POLICY: 'https://heliotrope-decision-218.notion.site/d8dc6eba03a5432c98d618f03508aa24',
} as const;

const SOCIAL_LINKS = {
	INSTAGRAM: 'https://www.instagram.com/pump_official/',
};

const Footer = () => {
	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.InnerWrapper display={'flex'} flexDirection={'column'} width={'100%'}>
					<S.LinkContentsWrapper>
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_INTRODUCE} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="body_oneline_003" color={theme.colors.gray_006}>
								서비스 소개
							</Typography>
						</S.Anchor>
						<Divider direction="vertical" width="18px" height="1px" margin="0 10px 0 10px" color="#D9D9D9" />
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_TERMS} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="body_oneline_003" color={theme.colors.gray_006}>
								서비스 이용약관
							</Typography>
						</S.Anchor>
						<Divider direction="vertical" width="18px" height="1px" margin="0 10px 0 10px" color="#D9D9D9" />
						<S.Anchor href={REFERCENCE_LINKS.SERVICE_POLICY} target="_blank" rel="noreferrer">
							<Typography variant="span" aggressive="tab_001" color={theme.colors.gray_006}>
								개인정보 처리방침
							</Typography>
						</S.Anchor>
					</S.LinkContentsWrapper>

					<Typography variant="h4" aggressive="body_oneline_003" color={theme.colors.gray_004} margin="0 0 40px 0">
						bardchoi.pump@gmail.com
					</Typography>
					<Typography variant="h4" aggressive="body_oneline_003" color={theme.colors.gray_004}>
						Copyright 2023. Pump All rights reserved.
					</Typography>

					<S.ChannelWrapper>
						<S.Anchor href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noreferrer">
							<InstagramIcon className="social" />
						</S.Anchor>
					</S.ChannelWrapper>
				</S.InnerWrapper>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default React.memo(Footer);
