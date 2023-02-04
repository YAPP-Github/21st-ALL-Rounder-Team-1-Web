'use client';

import ProductInfoElement from 'components/feature/ProductInfoElement';
import { Typography } from 'components/shared';
import { FormEvent } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

const Step3 = () => {
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<GuideWrapper>
				<Typography variant={'h2'} aggressive={'body_multiline_001'} color={theme.colors.gray_005}>
					※ 매장에서 판매 중인 “리필” 제품만 등록 부탁드립니다. 각 제품의 상품명은 필수 입력 사항입니다.
				</Typography>
			</GuideWrapper>
			<ProductInfoElement />
		</form>
	);
};

export default Step3;
const GuideWrapper = styled.div`
	width: 932px;
	height: 66px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.gray_000};
	padding: 20px;
`;
