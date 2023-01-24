'use client';

import { MyPageSectionEmptyStore, MyPageSectionRegisteredStore } from 'components/feature';
import { StyledLayout, Typography } from 'components/shared';
import { MyPageSectionDescriptionWarpper, MyPageSectionDescription } from 'components/feature/MyPageSection/styled';
import { theme } from 'styles';

const StoreManagement = () => {
	return (
		<StyledLayout.FlexBox flexDirection="column" margin="84px 0">
			<Typography variant="h2" aggressive="headline_oneline_003" margin="0 0 20px 0">
				매장 및 상품 정보 관리
			</Typography>
			<MyPageSectionDescriptionWarpper>
				<MyPageSectionDescription>
					입점한 매장의 매장 정보와 상품 정보를 직접 관리(추가, 삭제, 수정 등)할 수 있습니다.
				</MyPageSectionDescription>
				<MyPageSectionDescription>
					추가, 삭제 등 변경사항이 있는 정보는 익일 새벽 00:00시 Pump 서비스에 한꺼번에 반영됩니다.
				</MyPageSectionDescription>
			</MyPageSectionDescriptionWarpper>

			{false ? (
				<MyPageSectionEmptyStore />
			) : (
				<>
					<Typography variant="h3" aggressive="body_oneline_004" color={theme.colors.gray_005} margin="14px 0">
						매장
					</Typography>
					<MyPageSectionRegisteredStore />
				</>
			)}
		</StyledLayout.FlexBox>
	);
};

export default StoreManagement;
