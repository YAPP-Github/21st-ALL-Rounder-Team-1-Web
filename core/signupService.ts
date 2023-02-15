export const isValidatedSignupFormAgreement = (signupAgreementForm: { [key: string]: boolean }) => {
	const copySignupAgreementForm = { ...signupAgreementForm };

	return Object.keys(copySignupAgreementForm).every((key) => copySignupAgreementForm[key]);
};
