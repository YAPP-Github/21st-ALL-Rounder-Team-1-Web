'use client';

import { useRouter } from 'next/navigation';
import { StyledLayout, Typography, LargeBtn } from 'components/shared';
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
				마이페이지에서 가게 정보 및 판매 상품을 관리할 수 있습니다.
				<br />
				상세 내용을 관리할 수 있다는 더미 텍스트 더미 텍스트 더미 텍스트 더미 텍스트
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
