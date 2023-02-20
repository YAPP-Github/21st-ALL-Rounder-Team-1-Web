'use client';

import { StoreRegistrationExitConfirmModal, TextField } from 'components/feature';
import { LargeBtn, PrivateRoute, StyledLayout, Typography } from 'components/shared';
import { checkEmptyInputError, saveUserInput } from 'core/storeRegistrationService';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import useModalStore, { MODAL_KEY } from 'store/actions/modalStore';
import { step1ErrorStore, step1RequestStore } from 'store/actions/step1Store';

import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	const router = useRouter();
	const { modalKey, changeModalKey } = useModalStore();
	const { name, email, phoneNumber, changeError, changeNormal, changeFormError, changeFormNormal } = step1ErrorStore();
	const { setStep1Request } = step1RequestStore();
	const [customPhoneNum, setCustomPhoneNum] = useState('');
	const [currentKey, setCurrentKey] = useState('');
	const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
		let newText = e.target.value;
		const num = /[-0-9]/;
		if (newText.length > 0 && !num.test(newText[newText.length - 1])) return;
		if (newText.length > 13) return;
		if (newText.length === 13) {
			setCustomPhoneNum(newText.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
		}
		if (currentKey !== 'Backspace' && (newText.length === 3 || newText.length === 8)) {
			newText += '-';
		}
		setCustomPhoneNum(newText.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
	};

	const checkKey = (e: KeyboardEvent<HTMLInputElement>) => {
		setCurrentKey(e.key);
	};
	const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const checkResult = checkEmptyInputError(e.currentTarget.step1, changeError);
		if (checkResult[0] !== 0) return;
		if (checkResult[1]) {
			changeFormError();
			return;
		}
		await saveUserInput(e.currentTarget.step1, setStep1Request);
		router.replace('/registration/step2');
	};
	//TODO: 모달 크롬거 안 뜨도록 설정 필요
	// const preventClose = (e: BeforeUnloadEvent) => {
	// 	e.preventDefault();
	// 	(e || window.event).returnValue = '';
	// 	changeModalKey(MODAL_KEY.ON_STORE_REGISTRATION_EXIT_CONFIRM_MODAL);
	// 	return 0;
	// };

	// useEffect(() => {
	// 	(() => {
	// 		window.addEventListener('beforeunload', preventClose);
	// 	})();
	// 	return () => {
	// 		window.removeEventListener('beforeunload', preventClose);
	// 	};
	// }, []);
	return (
		<>
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
						emptyErrorMessage="대표자명을 입력해주세요"
						onFocus={() => changeNormal('name')}
						inputFlag={name.isError}
						width="320px"
						value={name.value === '' ? undefined : name.value}
						placeholder="이름을 입력해주세요"
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="email">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							이메일
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="이메일을 입력해주세요"
						formErrorMessage="이메일 형식을 확인해주세요"
						formFlag={email.formError}
						id="email"
						name="step1"
						onFocus={() => {
							changeNormal('email');
							if (email.formError) changeFormNormal();
						}}
						inputFlag={email.isError}
						width="320px"
						value={email.value === '' ? undefined : email.value}
						placeholder="예: pump@pump.com"
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.TextFieldSection>
					<label htmlFor="phoneNumber">
						<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
							전화번호
						</Typography>
					</label>
					<TextField
						emptyErrorMessage="전화번호를 입력해주세요"
						id="phoneNumber"
						name="step1"
						onFocus={() => changeNormal('phoneNumber')}
						inputFlag={phoneNumber.isError}
						width="320px"
						value={customPhoneNum}
						placeholder="‘-‘ 를 빼고 숫자만 입력해주세요"
						onChange={handlePhoneNumber}
						onKeyDown={checkKey}
					/>
				</StyledLayout.TextFieldSection>
				<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
					<LargeBtn style={style.btnStyle.primary_btn_002} type="submit">
						다음단계
					</LargeBtn>
				</StyledLayout.FlexBox>
			</form>
			{modalKey === MODAL_KEY.ON_STORE_REGISTRATION_EXIT_CONFIRM_MODAL && (
				<StoreRegistrationExitConfirmModal onCancel={() => changeModalKey(MODAL_KEY.OFF)} onConfirm={() => window.close()} />
			)}
		</>
	);
};

export default PrivateRoute(Step1);
