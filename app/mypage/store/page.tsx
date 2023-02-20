'use client';

import {
	MyPageSectionEmptyStore,
	MyPageSectionRegisteredStore,
	StoreRegistrationCancelConfirmModal,
	StoreRegistrationCancelSuccessModal,
} from 'components/feature';
import { MyPageSectionDescription, MyPageSectionDescriptionWarpper } from 'components/feature/MyPageSection/styled';
import { StyledLayout, Typography } from 'components/shared';
import { useDeleteStore } from 'hooks/api/store/useDeleteStore';
import { useGetStoreInMyPage } from 'hooks/api/store/useGetStore';
import { useState } from 'react';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { theme } from 'styles';

const StoreManagement = () => {
	const [refetchStoreToggle, setRefetchStoreToggle] = useState(false);
	const { data: store } = useGetStoreInMyPage(refetchStoreToggle);
	const { modalKey, changeModalKey } = useModalStore();
	const storeDeleteMutation = useDeleteStore();

	const handleStoreRegistrationCancelConfirm = () => {
		// 입점 매장 철회 API 요청 & Mutation
		try {
			storeDeleteMutation.mutate(store?.id as number, {
				onSuccess: () => {
					setRefetchStoreToggle(!refetchStoreToggle);
				},
			});
			changeModalKey(MODAL_KEY.ON_STORE_REGISTRATION_CANCEL_SUCCESS_MODAL);
		} catch (error) {
			console.error(error);
		}
	};

	const handleStoreRegistrationCancelSuccess = () => {
		changeModalKey(MODAL_KEY.OFF);
	};

	return (
		<StyledLayout.FlexBox flexDirection="column" margin="84px 0">
			<Typography variant="h2" aggressive="headline_oneline_003" margin="0 0 20px 0">
				매장 및 상품 정보 관리
			</Typography>
			<MyPageSectionDescriptionWarpper>
				{store ? (
					<>
						<MyPageSectionDescription>
							입점한 매장의 매장 정보와 상품 정보를 직접 관리(추가, 삭제, 수정 등)할 수 있습니다.
						</MyPageSectionDescription>
					</>
				) : (
					<>
						<MyPageSectionDescription>
							Pump 입점을 위해 [입점 신청하기] 버튼을 눌러 입점신청서를 먼저 작성해주세요.
						</MyPageSectionDescription>
					</>
				)}
			</MyPageSectionDescriptionWarpper>

			<Typography variant="h3" aggressive="body_oneline_004" color={theme.colors.gray_005} margin="0 0 14px 0">
				매장
			</Typography>

			{store ? <MyPageSectionRegisteredStore store={store} /> : <MyPageSectionEmptyStore />}

			{modalKey === MODAL_KEY.ON_STORE_REGISTRATION_CANCEL_CONFIRM_MODAL && (
				<StoreRegistrationCancelConfirmModal
					onCancel={() => changeModalKey(MODAL_KEY.OFF)}
					onConfirm={handleStoreRegistrationCancelConfirm}
				/>
			)}

			{modalKey === MODAL_KEY.ON_STORE_REGISTRATION_CANCEL_SUCCESS_MODAL && (
				<StoreRegistrationCancelSuccessModal onClick={handleStoreRegistrationCancelSuccess} />
			)}
		</StyledLayout.FlexBox>
	);
};

export default StoreManagement;
