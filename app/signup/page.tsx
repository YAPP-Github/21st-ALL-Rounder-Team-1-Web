'use client';

import { useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Checkbox, LargeBtn, Typography } from 'components/shared';
import { SignuptextField } from 'components/feature';
import style from 'styles/style';
import { isValidatedSignupFormAgreement } from 'core/signupService';
import { SERVICE_TERMS_DESC, SERVICE_POLICY_DESC_001, SERVICE_POLICY_DESC_002 } from 'constants/signup';
import useOAuthResponseStore from 'store/actions/oauthStore';
import { useRouter, usePathname } from 'next/navigation';
import { postJwtTokenByOAuthResponse } from 'hooks/api/auth/useSignup';
import { setUserTokenInLocalStorage } from 'utils/storage';

const SignUp = () => {
	const router = useRouter();
	const pathname = usePathname();

	const [isLoadingPostJwtToken, setIsLoadingPostJwtToken] = useState(false);
	const { oauthResponse } = useOAuthResponseStore();
	const { email, oauthType } = oauthResponse;

	const [signupAgreementForm, setSignupAgreementForm] = useState<{ [key: string]: boolean }>({
		serviceAll: true,
		serviceTerms: true,
		servicePolicy: true,
	});

	const handleSignupFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name } = event.currentTarget;

		if (name === 'serviceAll') {
			setSignupAgreementForm({
				serviceAll: !signupAgreementForm.serviceAll,
				serviceTerms: !signupAgreementForm.serviceAll,
				servicePolicy: !signupAgreementForm.serviceAll,
			});

			return;
		}

		if (name === 'serviceTerms') {
			if (signupAgreementForm.serviceAll) {
				setSignupAgreementForm({ ...signupAgreementForm, serviceAll: false, serviceTerms: !signupAgreementForm.serviceTerms });
			} else {
				const isSetWithAgreementAll = !signupAgreementForm.serviceTerms && signupAgreementForm.servicePolicy;
				setSignupAgreementForm({
					...signupAgreementForm,
					serviceAll: isSetWithAgreementAll,
					serviceTerms: !signupAgreementForm.serviceTerms,
				});
			}

			return;
		}

		if (name === 'servicePolicy') {
			if (signupAgreementForm.serviceAll) {
				setSignupAgreementForm({ ...signupAgreementForm, serviceAll: false, servicePolicy: !signupAgreementForm.servicePolicy });
			} else {
				const isSetWithAgreementAll = !signupAgreementForm.servicePolicy && signupAgreementForm.serviceTerms;
				setSignupAgreementForm({
					...signupAgreementForm,
					serviceAll: isSetWithAgreementAll,
					servicePolicy: !signupAgreementForm.servicePolicy,
				});
			}

			return;
		}
	};

	const handleSignupFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoadingPostJwtToken(true);

		// TODO: SERVER 로 회원가입 POST API Call
		// 사용자 정보(by. OAUTH) - 이메일(Required), 닉네임(Required), 프로필 이미지(optional) & 가입 동의 항목 획득
		// POST API Call Response Status Code 를 기반으로 분기
		try {
			// Success
			const token = await postJwtTokenByOAuthResponse(oauthResponse);
			setUserTokenInLocalStorage(token);
			router.push('/');
		} catch (error) {
			// Fail
		}
	};

	const handleWindowBeforeUnload = (event: BeforeUnloadEvent) => {
		event.preventDefault();
		event.returnValue = '뭔데';
	};

	const handleWindowPopState = (event: PopStateEvent) => {
		event.preventDefault();

		if (confirm('회원가입을 그만 두시겠습니까 ?')) {
			router.push('/');
		} else {
			router.push('/signup');
		}
	};

	const handleWindowReload = () => {
		router.push('/');
	};

	useEffect(() => {
		window.addEventListener('beforeunload', handleWindowBeforeUnload, { capture: true });
		window.addEventListener('popstate', handleWindowPopState);
		window.addEventListener('unload', handleWindowReload);

		return () => {
			window.removeEventListener('beforeunload', handleWindowBeforeUnload, { capture: true });
			window.removeEventListener('popstate', handleWindowPopState);
			window.removeEventListener('unload', handleWindowReload);
		};
	}, []);

	return (
		<Container onSubmit={handleSignupFormSubmit}>
			<Typography variant="h2" aggressive="headline_oneline_002" padding="0 0 12px 0">
				Pump!에 오신 것을 환영합니다!
			</Typography>
			<Typography variant="p" aggressive="body_oneline_000" padding="0 0 32px 0">
				{oauthType} 계정으로 Pump!를 이용하실 수 있습니다.
			</Typography>

			<SignuptextField type="text" readOnly={true} defaultValue={email} />

			<Checkbox
				aggressive="headline_oneline_004"
				gap="9px"
				margin="32px 0 24px 0"
				id="serviceAll"
				name="serviceAll"
				description="전체 약관에 동의합니다"
				checked={signupAgreementForm.serviceTerms && signupAgreementForm.servicePolicy}
				onChange={handleSignupFormChange}
			/>

			<div style={{ width: '100%', height: '1px', marginBottom: '16px', backgroundColor: '#f2f2f7' }} />

			<Checkbox
				aggressive="headline_oneline_005"
				gap="9px"
				margin="0 0 16px 0"
				id="serviceTerms"
				name="serviceTerms"
				description="[필수] 서비스 이용 약관 동의"
				checked={signupAgreementForm.serviceTerms}
				onChange={handleSignupFormChange}
			/>
			<AgreeDescriptionWrapper margin="0 0 24px 0">{SERVICE_TERMS_DESC}</AgreeDescriptionWrapper>

			<Checkbox
				aggressive="headline_oneline_005"
				gap="9px"
				margin="0 0 16px 0"
				id="servicePolicy"
				name="servicePolicy"
				description="[필수] 개인정보 수집 동의"
				checked={signupAgreementForm.servicePolicy}
				onChange={handleSignupFormChange}
			/>
			<AgreeDescriptionWrapper margin="0 0 48px 0">
				{SERVICE_POLICY_DESC_001}
				<br />
				{SERVICE_POLICY_DESC_002}
			</AgreeDescriptionWrapper>

			<BtnWrapper>
				<LargeBtn
					style={style.btnStyle.white_btn}
					onClick={() => {
						console.info('취소 클릭 !');
					}}
				>
					취소
				</LargeBtn>
				<LargeBtn
					style={style.btnStyle.primary_btn_001}
					type="submit"
					disabled={!isValidatedSignupFormAgreement(signupAgreementForm)}
				>
					{isLoadingPostJwtToken ? `회원가입 진행중` : `회원가입 완료`}
				</LargeBtn>
			</BtnWrapper>
		</Container>
	);
};

export default SignUp;

export const Container = styled.form`
	position: relative;
	width: 590px;
	padding: 88px 0 104px 0;
	text-align: center;
`;

export const AgreeDescriptionWrapper = styled.div<CSSProperties>`
	width: 100%;
	height: 208px;
	margin: ${({ margin }) => margin};
	padding: 24px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body_multiline_005};
	color: ${({ theme }) => theme.colors.gray_005};
	overflow: scroll;
`;

export const BtnWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 10px;

	& > button {
		flex: 1;
	}
`;
