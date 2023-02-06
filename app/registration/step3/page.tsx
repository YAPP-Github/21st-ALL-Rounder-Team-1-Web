'use client';

import { Accordion, AccordionDetails, AccordionSummary, withStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import ProductInfoElement from 'components/feature/ProductInfoElement';
import { Typography } from 'components/shared';
import { FormEvent } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

const Step3 = () => {
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log((document.querySelector('.step3')?.children[0] as HTMLInputElement).value);
		console.log(e.target.step3);
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<GuideWrapper>
				<Typography variant={'h2'} aggressive={'body_multiline_001'} color={theme.colors.gray_005}>
					※ 매장에서 판매 중인 “리필” 제품만 등록 부탁드립니다. 각 제품의 상품명은 필수 입력 사항입니다.
				</Typography>
			</GuideWrapper>
			<StAccordion>
				<StAccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant={'h3'} aggressive={'headline_oneline_004'} color={theme.colors.gray_007}>
						기초화장 / 세안
					</Typography>
				</StAccordionSummary>
				<StAccordionDetails>
					<ProductInfoElement elementIndex={0} onClick={undefined} />
				</StAccordionDetails>
			</StAccordion>

			<StAccordion>
				<StAccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant={'h3'} aggressive={'headline_oneline_004'} color={theme.colors.gray_007}>
						바디 / 헤어
					</Typography>
				</StAccordionSummary>
				<StAccordionDetails>
					<ProductInfoElement elementIndex={0} onClick={undefined} />
				</StAccordionDetails>
			</StAccordion>
			<StAccordion>
				<StAccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant={'h3'} aggressive={'headline_oneline_004'} color={theme.colors.gray_007}>
						세제
					</Typography>
				</StAccordionSummary>
				<StAccordionDetails>
					<ProductInfoElement elementIndex={0} onClick={undefined} />
				</StAccordionDetails>
			</StAccordion>
			<StAccordion>
				<StAccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant={'h3'} aggressive={'headline_oneline_004'} color={theme.colors.gray_007}>
						식재료
					</Typography>
				</StAccordionSummary>
				<StAccordionDetails>
					<ProductInfoElement elementIndex={0} onClick={undefined} />
				</StAccordionDetails>
			</StAccordion>
			<StAccordion>
				<StAccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant={'h3'} aggressive={'headline_oneline_004'} color={theme.colors.gray_007}>
						기타
					</Typography>
				</StAccordionSummary>
				<StAccordionDetails>
					<ProductInfoElement elementIndex={0} onClick={undefined} />
				</StAccordionDetails>
			</StAccordion>
		</form>
	);
};

const GuideWrapper = styled.div`
	width: 932px;
	height: 66px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.gray_000};
	padding: 20px;
`;
const StAccordion = withStyles({
	root: {
		textAlign: 'center',
		width: '932px',
		height: '72px',
		boxShadow: 'none',
		borderBottom: `1px solid ${theme.colors.gray_002}`,
		borderBottomRightRadius: 'none',
		borderBottomLeftRadius: 'none',
		display: 'flex',
		flexDirection: 'column',
		margin: 0,
		'&$expanded': {
			minHeight: '144px',
			margin: 0,
		},
		'&:before': {
			background: 'none',
		},
	},
	expanded: {},
})(Accordion);

const StAccordionSummary = withStyles({
	root: {
		margin: 0,
		height: '72px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '26px 0',
		border: 'none',
	},
	content: {
		margin: 0,
		'&$expanded': {
			margin: 0,
		},
	},
	expanded: {
		padding: '26px 0',
		margin: 0,
	},
})(AccordionSummary);

const StAccordionDetails = withStyles({
	root: {
		padding: 0,
		marginBottom: '24px',
	},
	expanded: {},
})(AccordionDetails);

export default Step3;
