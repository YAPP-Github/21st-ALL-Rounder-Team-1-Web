'use client';

import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import { useRouter } from 'next/navigation';
import { style, theme } from 'styles';

const StoreRegistrationSuccess = () => {
	const router = useRouter();

	return (
		<StyledLayout.FlexBox
			flexDirection={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			minHeight={'calc(100vh - 258px)'}
		>
			<Typography
				variant={'h2'}
				aggressive={'headline_oneline_002'}
				color={theme.colors.gray_007}
				margin={'0 0 16px 0'}
				align={'center'}
			>
				입점 신청 감사합니다.
			</Typography>
			<Typography
				variant={'p'}
				aggressive={'body_multiline_002'}
				color={theme.colors.gray_005}
				margin={'0 0 24px 0'}
				align={'center'}
			>
				입력하신 정보는 앱에 실시간으로 반영되며,
				<br />
				마이페이지에서 매장 및 판매 상품 정보를 관리하실 수 있습니다.
			</Typography>

			<LargeBtn
				style={style.btnStyle.primary_btn_002}
				color={theme.colors.gray_005}
				onClick={() => router.replace('/mypage/store')}
			>
				확인
			</LargeBtn>
		</StyledLayout.FlexBox>
	);
};

export default StoreRegistrationSuccess;
