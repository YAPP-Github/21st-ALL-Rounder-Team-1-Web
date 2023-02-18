'use client';

import { StyledLayout, Typography } from 'components/shared';
import { MotionShowBox } from 'components/shared/Motion';
import { Divider } from 'components/shared/styled/layout';
import Image from 'next/image';
import Link from 'next/link';
import {
	LandingAdvantage001Img,
	LandingAdvantage002Img,
	LandingAppImg,
	LandingFeature001Img,
	LandingFeature002Img,
	LandingFeature003Img,
} from 'public/static/images';
import styled, { CSSProperties } from 'styled-components';
import { theme } from 'styles';

const SERVICE_INTRODUCE_PDF_LINK = 'https://drive.google.com/file/d/1f40Y7fdPCTnH83JgiIMmdeFb_igRMUBP/view';

const FEATURE_INTRO = [
	{
		id: 1,
		imageSrc: LandingFeature001Img,
		title: '주변 리필스테이션 추천',
		description: '사용자 위치에 기반해서\n가장 가까운 리필스테이션을 추천해요.',
	},
	{
		id: 2,
		imageSrc: LandingFeature002Img,
		title: '판매 상품 안내',
		description: '판매 중인 리필 상품의 종류를\n앱에서 미리 확인할 수 있어요.',
	},
	{
		id: 3,
		imageSrc: LandingFeature003Img,
		title: '리필스테이션 리뷰',
		description: '리뷰를 통해 리필 경험을\n공유할 수 있어요.',
	},
] as const;

const FEATURE_ADVANTAGE = [
	{
		id: 1,
		imageSrc: LandingAdvantage001Img,
		title: '마케팅 비용 없이\n홍보해요',
		description: '사용자 위치와 가장 가까운 리필스테이션을 추천하기에\n입점을 통해 자연스레 내 리필스테이션을 홍보할 수 있어요. ',
	},
	{
		id: 2,
		imageSrc: LandingAdvantage002Img,
		title: '판매 중인 리필 상품을\n손쉽게 안내해요',
		description: '인스타그램, 블로그와 같은 SNS에서 자주 받는\n판매 상품 문의를 하나의 플랫폼에서 해결해요.',
	},
] as const;

const FEATURE_FAQ = [
	{
		id: 1,
		title: '서비스는 앱에서만 제공되나요?',
		description:
			'손님용 서비스는 모바일 앱으로 제공되며, 매장 / 판매제품 정보를 직접 관리할 수 있는 사장님용 서비스는 웹으로 제공됩니다.',
	},
	{
		id: 2,
		title: '네이버 플레이스, 인스타그램과 같은 서비스보다 펌프를 사용하면 좋은 점은 무엇인가요?',
		description:
			'한 곳에서 매장 · 제품 정보를 관리할 수 있고, 더 자세하고 많은 정보를 손님들에게 제공할 수 있다는 점입니다. 향후에는 구매한 리필 제품에 대한 정보를 직접 기록할 수 있도록 하거나, 탄소중립포인트 적립을 도와주는 등 리필을 자주 하는 사람들을 위한 기능을 더 많이 개발할 계획입니다.',
	},
	{
		id: 3,
		title: '꼭 필요해보이는 기능을 제안하고 싶은데, 어떻게 전달할 수 있나요?',
		description: '아래 연락처 혹은 이메일로 연락부탁드립니다.\nTel. 010-2051-7330\nE-mail. bardchoi.pump@gmail.com',
	},
] as const;

const Root = () => {
	return (
		<StyledLayout.FlexBox flexDirection="column" alignItems="center">
			<StyledLayout.FlexBox
				justifyContent="center"
				gap="164px"
				width="100%"
				margin="0 auto"
				padding="80px 0 0 0"
				background="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9FB 100%)"
			>
				<StyledLayout.FlexBox flexDirection="column">
					<Typography variant="h2" aggressive="headline_multiline_001" align="left" padding="48px 0 24px 0">
						리필스테이션,
						<br />
						Pump에서 알리세요!
					</Typography>
					<Typography variant="p" aggressive="body_multiline_000" align="left" padding="0 0 48px 0" color={theme.colors.gray_006}>
						간편하게 가게 정보와 판매 상품을 등록하고
						<br />더 많은 사람에게 리필스테이션의 가치를 전해보세요.
					</Typography>

					<StyledLayout.FlexBox width="320px" height="50px" gap="6px">
						<StyledLinkBtn
							href={'/registration/step1'}
							flex={1}
							border={`1px solid ${theme.colors.primary_010}`}
							borderradius={'8px'}
							backgroundcolor={theme.colors.primary_010}
							color={theme.colors.white}
						>
							<Typography variant="span" aggressive="button_000">
								입점 신청
							</Typography>
						</StyledLinkBtn>
						<StyledLinkBtn
							href={SERVICE_INTRODUCE_PDF_LINK}
							target={'_blank'}
							flex={1}
							border={`1px solid ${theme.colors.gray_002}`}
							borderradius={'8px'}
							color={theme.colors.gray_006}
						>
							<Typography variant="span" aggressive="button_000">
								서비스 소개서
							</Typography>
						</StyledLinkBtn>
					</StyledLayout.FlexBox>
				</StyledLayout.FlexBox>

				<StyledLayout.FlexBox>
					<MotionShowBox showDirection={'up'}>
						<Image src={LandingAppImg} alt="" width={440} height={504} loading="lazy" />
					</MotionShowBox>
				</StyledLayout.FlexBox>
			</StyledLayout.FlexBox>

			<StyledLayout.FlexBox flexDirection="column" width="996px" margin="64px 0 0 0">
				<Typography variant="h2" aggressive="headline_oneline_002" margin="0 0 32px 0" color={theme.colors.gray_007}>
					앱 주요 기능
				</Typography>

				<StyledLayout.FlexBox gap="48px" whiteSpace="pre-wrap">
					{FEATURE_INTRO.map((feature) => {
						const { id, imageSrc, title, description } = feature;
						return (
							<Card key={id}>
								<BackgroundBox
									alignItems={'center'}
									justifyContent={'center'}
									width="300px"
									height="300px"
									margin="0 0 32px 0"
									backgroundColor={theme.colors.gray_000}
								>
									<MotionShowBox showDirection={'up'} delay={id}>
										<Image src={imageSrc} alt={''} width={300} height={300} loading="lazy" />
									</MotionShowBox>
								</BackgroundBox>

								<Typography
									variant="h3"
									aggressive="headline_oneline_003"
									margin="0 0 12px 0"
									align="center"
									color={theme.colors.gray_007}
								>
									{title}
								</Typography>
								<Typography variant="p" aggressive="body_multiline_002" align="center" color={theme.colors.gray_006}>
									{description}
								</Typography>
							</Card>
						);
					})}
				</StyledLayout.FlexBox>
			</StyledLayout.FlexBox>

			<StyledLayout.FlexBox flexDirection="column" width="996px" margin="128px 0 0 0">
				<Typography variant="h2" aggressive="headline_oneline_002" margin="0 0 32px 0" color={theme.colors.gray_007}>
					입점 기대효과
				</Typography>

				{FEATURE_ADVANTAGE.map((advantage) => {
					const { id, imageSrc, title, description } = advantage;
					return (
						<StyledLayout.FlexBox key={id} gap="32px" margin="0 0 48px 0" whiteSpace="pre-wrap">
							<BackgroundBox
								alignItems={'center'}
								justifyContent={'center'}
								width="500px"
								height="280px"
								backgroundColor={theme.colors.gray_000}
							>
								<MotionShowBox showDirection={'up'} delay={id}>
									<Image src={imageSrc} alt={''} width={500} height={280} loading="lazy" />
								</MotionShowBox>
							</BackgroundBox>

							<StyledLayout.FlexBox flexDirection="column" justifyContent="center">
								<Typography
									variant="h3"
									aggressive="headline_multiline_002"
									margin="0 0 12px 0"
									align="left"
									color={theme.colors.gray_007}
								>
									{title}
								</Typography>
								<Typography variant="p" aggressive="body_multiline_001" align="left" color={theme.colors.gray_006}>
									{description}
								</Typography>
							</StyledLayout.FlexBox>
						</StyledLayout.FlexBox>
					);
				})}
			</StyledLayout.FlexBox>

			<StyledLayout.FlexBox flexDirection="column" width="996px" margin="128px 0 0 0">
				<Typography variant="h2" aggressive="headline_oneline_002" margin="0 0 48px 0" color={theme.colors.gray_007}>
					FAQ
				</Typography>

				<StyledLayout.FlexBox flexDirection="column" alignItems="start" gap="48px">
					{FEATURE_FAQ.map((faq) => {
						const { id, title, description } = faq;
						return (
							<div key={id}>
								<Typography variant="h4" aggressive="headline_oneline_004" color={theme.colors.gray_006}>
									{title}
								</Typography>
								<Divider direction="horizontal" width="996px" height="1px" margin="20px 0 16px 0" color={theme.colors.gray_002} />
								<Typography variant="p" aggressive="body_multiline_001" color={theme.colors.gray_006}>
									{description}
								</Typography>
							</div>
						);
					})}
				</StyledLayout.FlexBox>
			</StyledLayout.FlexBox>

			<StyledLayout.FlexBox width="996px" margin="88px 0 96px 0">
				<BackgroundBox
					alignItems="center"
					justifyContent="space-between"
					width="100%"
					padding="34px 48px"
					backgroundColor={theme.colors.primary_001}
				>
					<Typography variant="h2" aggressive="headline_oneline_003" color={theme.colors.primary_010}>
						리필스테이션 홍보는 Pump에서 시작해보세요.
					</Typography>

					<StyledLinkBtn
						href={'/registration/step1'}
						padding="16px 47px"
						border={`1px solid ${theme.colors.primary_010}`}
						borderradius={'8px'}
						backgroundcolor={theme.colors.primary_010}
						color={theme.colors.white}
					>
						<Typography variant="span" aggressive="button_000">
							입점 신청
						</Typography>
					</StyledLinkBtn>
				</BackgroundBox>
			</StyledLayout.FlexBox>
		</StyledLayout.FlexBox>
	);
};

export default Root;

type LinkBtnProps = {
	borderradius?: string;
	backgroundcolor?: string;
} & CSSProperties;

const StyledLinkBtn = styled(Link)<LinkBtnProps>`
	flex: ${({ flex }) => flex};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ padding }) => padding};
	border: ${({ border }) => border};
	border-radius: ${({ borderradius }) => borderradius};
	background-color: ${({ backgroundcolor }) => backgroundcolor};
	color: ${({ color }) => color};
`;

const Card = styled.div`
	flex: 1;
`;

const BackgroundBox = styled(StyledLayout.FlexBox)`
	position: relative;
	border-radius: 12px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	object-fit: contain;
`;
