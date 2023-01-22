export const extractBusinessLicenseExceptHyhpen = (businessLicense: string) => {
	return businessLicense
		.split('')
		.filter((c) => c !== '-')
		.join('');
};
export const checkEmptyInputError = (inputArr: RadioNodeList, changeError: (id: number) => void) => {
	let emptyInput = 0;
	for (let i = 0; i < inputArr.length; i++) {
		if ((inputArr[i] as HTMLInputElement).value === '') {
			changeError(i);
			emptyInput++;
		}
	}
	return emptyInput;
};
