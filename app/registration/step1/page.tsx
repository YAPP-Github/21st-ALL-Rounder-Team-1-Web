'use client';

import { TextField } from 'components/feature';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import { checkEmptyInputError } from 'core/storeRegistrationService';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { step1Store } from 'store/actions/step1Store';
import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	const { name, email, phoneNumber, setStep1InputValue, changeError, changeNormal } = step1Store();
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emptyInput = checkEmptyInputError(e.currentTarget.step1, changeError);
		if (emptyInput !== 0) return;

		
		// 여기서부터 서버 api 연결 로직
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="name">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						대표자명
					</Typography>
				</label>
				<TextField
					id="name"
					name="step1"
					emptyErrorMessage="대표자명을"
					onFocus={() => changeNormal('name')}
					inputFlag={name.isError}
					width="320px"
					value={name.value === '' ? undefined : name.value}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="email">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						이메일
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="이메일을"
					id="email"
					name="step1"
					onFocus={() => changeNormal('email')}
					inputFlag={email.isError}
					width="320px"
					value={email.value === '' ? undefined : email.value}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="phoneNumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						전화번호
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="전화번호를"
					id="phoneNumber"
					name="step1"
					onFocus={() => changeNormal('phoneNumber')}
					inputFlag={phoneNumber.isError}
					width="320px"
					value={phoneNumber.value === '' ? undefined : phoneNumber.value}
				/>
			</StyledLayout.TextFieldSection>

			<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
				<LargeBtn style={style.btnStyle.primary_btn_002} type="submit">
					다음단계
				</LargeBtn>
			</StyledLayout.FlexBox>
		</form>
	);
};

export default Step1;
