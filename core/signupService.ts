export const isValidatedSignupFormAgreement = (signupAgreementForm: { [key: string]: boolean }) => {
	const copySignupAgreementForm = { ...signupAgreementForm };

	return Object.keys(copySignupAgreementForm).every((key) => copySignupAgreementForm[key]);
};

export const getSocialPlatformType = (email: string | null | undefined) => {
	if (!email) return;

	const splitedDomain = email.split('@')[1];
	const socialPlatform = splitedDomain.split('.')[0];

	return socialPlatform === 'naver' ? 'Naver' : 'Kakao';
};
