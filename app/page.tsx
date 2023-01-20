'use client';

import styled from 'styled-components';
import { StyledLayout, Typography, Toast, LargeBtn } from 'components/shared';
import {
	StoreProductEditExitConfirmModal,
	LeaveMemberConfirmModal,
	StoreRegistrationConfirmModal,
	StoreRegistrationExitConfirmModal,
	StoreEditCompletionConfirmModal,
	StoreRegistrationCancelConfirmModal,
	StoreRegistrationStepChangeConfirmModal,
	StoreRegistrationCancelSuccessModal,
	LeaveMemberSuccessModal,
	StoreEditSuccessModal,
	StoreProductEditSuccessModal,
	StoreProductRequiredWarningModal,
} from 'components/feature';
import style from 'styles/style';
import { useRouter } from 'next/navigation';

const Root = () => {
	const router = useRouter();
	return (
		<Container display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
			{false && <Toast open={false} duration={3} />}

			<Typography variant="h2" aggressive="headline_multiline_001" align="center" lineHeight="64px" padding="0 0 24px 0">
				리필스테이션,
				<br />
				Pump! 에서 알리세요!
			</Typography>

			<Typography variant="p" aggressive="body_multiline_001" align="center" padding="0 0 36px 0">
				빠르고 간편하게 가게 정보와 판매상품을 등록하고
				<br />더 많은 사람에게 리필스테이션의 가치를 전해보세요.
			</Typography>

			<LargeBtn style={style.btnStyle.primary_btn_002} onClick={() => router.push('/registration/step1')}>
				입점 신청하기
			</LargeBtn>

			{false && <StoreProductEditExitConfirmModal />}
			{false && <LeaveMemberConfirmModal />}
			{false && <StoreRegistrationConfirmModal />}
			{false && <StoreRegistrationExitConfirmModal />}
			{false && <StoreEditCompletionConfirmModal />}
			{false && <StoreRegistrationCancelConfirmModal />}
			{false && <StoreRegistrationStepChangeConfirmModal />}

			{false && <StoreRegistrationCancelSuccessModal />}
			{false && <LeaveMemberSuccessModal />}
			{false && <StoreEditSuccessModal />}
			{false && <StoreProductEditSuccessModal />}
			{false && <StoreProductRequiredWarningModal />}
		</Container>
	);
};

export default Root;

const Container = styled(StyledLayout.FlexBox)`
	padding-top: 122px;
`;
