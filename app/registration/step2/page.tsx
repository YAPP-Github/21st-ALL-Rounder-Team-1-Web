'use client';

import { TextField, PostcodePopupOpenBtn } from 'components/feature';
import { StyledLayout, Typography, LargeBtn } from 'components/shared';
import { FormEvent, useState } from 'react';
import { theme, style } from 'styles';

const Step2 = () => {
	const [storePostcodeInputs, setStorePostcodeInputs] = useState({
		zonecode: '', // 우편번호
		address: '', // 기본 주소
		addressDetail: '', // 상세 주소
	});

	const handleExtractedPostCode = (extractedPostcode: string[]) => {
		const [zonecode, address] = extractedPostcode;

		setStorePostcodeInputs({
			...storePostcodeInputs,
			zonecode,
			address,
		});
	};

	const handleStoreAddressDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setStorePostcodeInputs({
			...storePostcodeInputs,
			addressDetail: event.target.value,
		});
	};
	const handleOnClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert('저장');
	};
	return (
		<form onSubmit={handleOnClick}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="storeName">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						상호
					</Typography>
				</label>
				<TextField
					name="storeName"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					// onChange={handleOnChange}
					// value={managerName}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="storeTelephoneNumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						매장 전화번호
					</Typography>
				</label>
				<TextField
					name="storeTelephoneNumber"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					// onChange={handleOnChange}
					// value={managerName}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="store-address-detail">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						매장 주소
					</Typography>
				</label>
				<StyledLayout.FlexBox gap={'6px'}>
					<TextField
						readOnly={true}
						flag="normal"
						name="store-postcode"
						value={storePostcodeInputs.zonecode}
						width={style.textFieldWidth.textField_width_320}
					/>
					<PostcodePopupOpenBtn onExtractedPostCode={handleExtractedPostCode} />
				</StyledLayout.FlexBox>

				<TextField
					readOnly={true}
					flag="normal"
					name="store-address"
					value={storePostcodeInputs.address}
					width={style.textFieldWidth.textField_width_560}
				/>
				<TextField
					flag="normal"
					name="store-address-detail"
					placeholder="(필수) 상세주소를 입력해주세요"
					value={storePostcodeInputs.addressDetail}
					width={style.textFieldWidth.textField_width_560}
					onChange={handleStoreAddressDetailChange}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="PromotionalChannel">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						홍보 채널 (선택)
					</Typography>
				</label>
				<TextField
					name="PromotionalChannel"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					// onChange={handleOnChange}
					// value={managerName}
				/>
				<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
					인스타그램, 블로그, 홈페이지 중 가장 활발히 사용하고 있는 채널 하나를 선택해서 링크 입력해주세요
				</Typography>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="dayOff">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						휴무일
					</Typography>
				</label>
				<TextField
					name="dayOff"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					// onChange={handleOnChange}
					// value={managerName}
				/>
				<StyledLayout.FlexBox style={{ paddingTop: '4px' }}>
					<Typography variant="p" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						ex) 연중 무휴, 매주 토요일, 매달 둘째 및 넷째주 토요일 등
					</Typography>
				</StyledLayout.FlexBox>
			</StyledLayout.TextFieldSection>
			<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
				<LargeBtn style={style.btnStyle.primary_btn_002} type="submit">
					다음단계
				</LargeBtn>
			</StyledLayout.FlexBox>
		</form>
	);
};

export default Step2;
