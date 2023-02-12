import { MutableRefObject, RefObject } from 'react';
import { step1Store } from 'store/actions/step1Store';

export const extractBusinessLicenseExceptHyhpen = (businessLicense: string) => {
	return businessLicense
		.split('')
		.filter((c) => c !== '-')
		.join('');
};
export const checkEmptyInputError = (inputArr: RadioNodeList, changeError: (inputId: string) => void) => {
	let emptyInput = 0;
	for (let i = 0; i < inputArr.length; i++) {
		if ((inputArr[i] as HTMLInputElement).value === '') {
			changeError((inputArr[i] as HTMLInputElement).id);
			emptyInput++;
		}
	}
	return emptyInput;
};
export const saveUserStep1Input = (inputArr: RadioNodeList) => {
	const { setStep1InputValue } = step1Store();
	for (let i = 0; i < inputArr.length; i++) {
		if ((inputArr[i] as HTMLInputElement).value !== '') {
			setStep1InputValue((inputArr[i] as HTMLInputElement).id, (inputArr[i] as HTMLInputElement).value);
		}
	}
};
export const businessHourDays = [
	{ id: 2, day: '월' },
	{ id: 3, day: '화' },
	{ id: 4, day: '수' },
	{ id: 5, day: '목' },
	{ id: 6, day: '금' },
	{ id: 7, day: '토' },
	{ id: 8, day: '일' },
];
export const makeBusinessHourData = (
	refArr: MutableRefObject<Array<RefObject<HTMLButtonElement>> | null[] | HTMLButtonElement[]>,
	selectedBusinessHourBtn: string,
) => {
	const businessHourArr = [];
	if (selectedBusinessHourBtn === 'weekDaysWeekEnd') {
		for (let i = 0; i < 5; i++) {
			businessHourArr.push({ day: businessHourDays[i].day, time: (refArr.current[0] as HTMLButtonElement).value });
		}
		for (let i = 5; i < 7; i++) {
			businessHourArr.push({ day: businessHourDays[i].day, time: (refArr.current[1] as HTMLButtonElement).value });
		}
	} else {
		for (let i = 0; i < 7; i++) {
			businessHourArr.push({
				day: businessHourDays[i].day,
				time: (refArr.current[businessHourDays[i].id] as HTMLButtonElement).value,
			});
		}
	}
	return JSON.stringify(businessHourArr)
		.split('')
		.filter((c) => c !== '"')
		.join('');
};
