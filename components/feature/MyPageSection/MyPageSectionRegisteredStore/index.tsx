import { StyledLayout, Typography } from 'components/shared';
import { MyPageActionBtn } from 'components/feature';
import * as S from './styled';
import { theme } from 'styles';
import { TrashIcon } from 'public/static/icons';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { Store } from 'hooks/api/store/useGetStore';
import { convertToHyphenDateFromUTC } from 'utils/date';
import { MyPageStoreDefualtImg } from 'public/static/images';

const MyPageSectionRegisteredStore = ({ store }: { store: Store }) => {
	const { name, address, callNumber, isReady, imgStore, modifiedAt } = store;

	const { changeModalKey } = useModalStore();

	return (
		<S.RegisteredStoreContainer>
			<S.RegisteredStoreContentWrapper>
				<StyledLayout.FlexBox>
					<S.RegisteredStoreImage
						src={imgStore?.length ? imgStore[0].path : MyPageStoreDefualtImg}
						alt={`${'서버데이터 - 상점 이름'}상점`}
						width={100}
						height={140}
					/>
				</StyledLayout.FlexBox>

				<StyledLayout.FlexBox flexDirection={'column'} flex={'1'} margin="0 16px">
					<Typography variant="span" aggressive="headline_oneline_004" margin="0 0 16px 0">
						{name ?? '리필스테이션 매장이름'}
					</Typography>

					{isReady ? (
						<>
							<Typography variant="span" aggressive="body_oneline_004" margin="0 0 8px 0" color={theme.colors.gray_005}>
								{address}
							</Typography>
							<Typography variant="span" aggressive="body_oneline_004" margin="0 0 8px 0" color={theme.colors.gray_005}>
								{callNumber}
							</Typography>
						</>
					) : (
						<Typography variant="span" aggressive="body_oneline_004" margin="0 0 8px 0" color={theme.colors.primary_010}>
							입점신청서 작성중
						</Typography>
					)}
				</StyledLayout.FlexBox>

				<StyledLayout.FlexBox flexDirection={'column'} justifyContent={'flex-start'} gap={'8px'}>
					{isReady ? (
						<>
							<MyPageActionBtn buttonTheme="black" type="button" onClick={() => console.info('판매제품 수정 GO')}>
								판매제품 수정
							</MyPageActionBtn>
							<MyPageActionBtn buttonTheme="white" type="button" onClick={() => console.info('가게정보 수정 GO')}>
								가게정보 수정
							</MyPageActionBtn>
						</>
					) : (
						<MyPageActionBtn buttonTheme="black" onClick={() => console.info('수정하기 GO')}>
							수정하기
						</MyPageActionBtn>
					)}
				</StyledLayout.FlexBox>

				<StyledLayout.FlexBox flexDirection={'column'} justifyContent={'flex-start'} margin={'0 0 0 30px'}>
					<S.RegisteredStoreDeleteBtn
						type="button"
						onClick={() => changeModalKey(MODAL_KEY.ON_STORE_REGISTRATION_CANCEL_CONFIRM_MODAL)}
					>
						<TrashIcon />
					</S.RegisteredStoreDeleteBtn>
				</StyledLayout.FlexBox>
			</S.RegisteredStoreContentWrapper>

			{modifiedAt && (
				<StyledLayout.FlexBox alignItems={'center'} justifyContent={'flex-end'} padding={'16px 28px'}>
					<StyledLayout.FlexBox gap="20px">
						<Typography variant="span" aggressive="body_oneline_005" color={theme.colors.gray_005}>
							마지막 수정일
						</Typography>
						<Typography variant="span" aggressive="body_oneline_005" color={theme.colors.gray_005}>
							{convertToHyphenDateFromUTC(modifiedAt)}
						</Typography>
					</StyledLayout.FlexBox>
				</StyledLayout.FlexBox>
			)}
		</S.RegisteredStoreContainer>
	);
};

export default MyPageSectionRegisteredStore;
