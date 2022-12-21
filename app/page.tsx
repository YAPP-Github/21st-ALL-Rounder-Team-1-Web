'use client';

import styled from 'styled-components';
import { StyledLayout, Typography } from 'components/shared';

const Root = () => {
	return (
		<Container display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
			<Typography variant="h2" aggressive="headline_001" align="center" lineHeight="64px" padding="0 0 24px 0">
				리필스테이션,
				<br />
				OOO서비스에서 알리세요!
			</Typography>
			<Typography variant="p" aggressive="body_multiline_001" align="center" padding="0 0 36px 0">
				빠르고 간편하게 가게 정보와 판매상품을 등록하고
				<br />더 많은 사람에게 리필스테이션의 가치를 전해보세요.
			</Typography>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '240px',
					height: '50px',
					borderRadius: '8px',
					backgroundColor: '#0064FF',
					color: '#FFFFFF',
					fontSize: '16px',
					fontWeight: 'medium',
				}}
			>
				입점 신청하기
			</div>
		</Container>
	);
};

export default Root;

const Container = styled(StyledLayout.FlexBox)`
	padding-top: 122px;
`;
