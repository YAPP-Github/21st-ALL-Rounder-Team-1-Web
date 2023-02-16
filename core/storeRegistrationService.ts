import { ItemsRequest } from 'hooks/api/items/usePostItems';
import { MutableRefObject, RefObject } from 'react';
import { Product } from 'store/actions/productStore';
import { step1RequestStore } from 'store/actions/step1Store';

export const extractBusinessLicenseExceptHyhpen = (businessLicense: string) => {
	return businessLicense
		.split('')
		.filter((c) => c !== '-')
		.join('');
};
export const checkEmptyInputError = (inputArr: RadioNodeList, changeError: (inputId: string) => void) => {
	let emptyInput = 0;
	for (let i = 0; i < inputArr.length; i++) {
		if ((inputArr[i] as HTMLInputElement).value === '' && (inputArr[i] as HTMLInputElement).id !== 'instaAccount') {
			changeError((inputArr[i] as HTMLInputElement).id);
			emptyInput++;
		}
	}
	return emptyInput;
};
export const saveStep2UserInput = async (
	inputArr: RadioNodeList,
	setFunc: (inputId: string, inputValue: string | string[] | null) => void,
) => {
	for (let i = 0; i < inputArr.length; i++) {
		if (
			(inputArr[i] as HTMLInputElement).id === 'businessHours' ||
			(inputArr[i] as HTMLInputElement).id === 'storeZonecode' ||
			(inputArr[i] as HTMLInputElement).id === 'basicAddress' ||
			(inputArr[i] as HTMLInputElement).id === 'addressDetail' ||
			(inputArr[i] as HTMLInputElement).id === 'imgPath'
		)
			continue;

		if ((inputArr[i] as HTMLInputElement).value !== '') {
			setFunc((inputArr[i] as HTMLInputElement).id, (inputArr[i] as HTMLInputElement).value);
		}
		if ((inputArr[i] as HTMLInputElement).value === '' && (inputArr[i] as HTMLInputElement).id === 'instaAccount') {
			setFunc('instaAccount', null);
		}
	}
};
export const saveUserInput = async (inputArr: RadioNodeList, setFunc: (inputId: string, inputValue: string) => void) => {
	for (let i = 0; i < inputArr.length; i++) {
		if ((inputArr[i] as HTMLInputElement).value !== '') {
			setFunc((inputArr[i] as HTMLInputElement).id, (inputArr[i] as HTMLInputElement).value);
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
	setFunc: (inputId: string, inputValue: string) => void,
) => {
	const businessHourArr: Array<{ day: string; time: string }> = [];
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
	setFunc('businessHours', JSON.stringify(businessHourArr));
};
export const makeStoreAddress = (
	address: {
		zonecode: string;
		address: string;
		detailAddress: string;
	},
	setFunc: (inputId: string, inputValue: string) => void,
) => {
	setFunc('address', `${address.zonecode}#${address.address}#${address.detailAddress}`);
};
export const makeImgPath = (
	selectedButton: string,
	imgPath: string,
	setFunc: (inputId: string, inputValue: string | string[] | null) => void,
) => {
	if (selectedButton === 'defaultImage') setFunc('imgPath', null);
	else {
		setFunc('imgPath', [imgPath]);
	}
};
export const makeItemsRequest = (itemsArr: Product[]) => {
	const itemsRequest: ItemsRequest[] = [];
	for (let i = 0; i < itemsArr.length; i++) {
		const cur = itemsArr[i];
		if (cur.brandName === '' && cur.productName === '') continue;
		itemsRequest.push({
			id: cur.id,
			title: cur.productName !== '' ? cur.productName : null,
			category: cur.category,
			brand: cur.brandName !== '' ? cur.brandName : null,
		});
	}
	return itemsRequest;
};
