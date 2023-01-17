export const extractBusinessLicenseExceptHyhpen = (businessLicense: string) => {
	return businessLicense
		.split('')
		.filter((c) => c !== '-')
		.join('');
};
