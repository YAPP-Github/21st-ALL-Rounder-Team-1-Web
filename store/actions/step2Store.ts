import { StoreData } from 'hooks/api/store/usePostStore';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Step2Store {
	step2Request: StoreData;
	setStep2Request: (inputId: string, inputValue: string) => void;
}

const initialState: StoreData = {
	name: '',
	latitude: '',
	longitude: '',
	businessHours: '',
	notice: '',
	address: '',
	imgPath: [''],
	instaAccount: '',
	callNumber: '',
	registrationNumber: '',
};

export interface Step2Error {
	[index: string]: Function | Object;
	name: { value: string; isError: 'normal' | 'error' };
	latitude: string;
	longitude: string;
	businessHours: string;
	notice: { value: string; isError: 'normal' | 'error' };
	address: { value: string; isError: 'normal' | 'error' };
	imgPath: { value: string[]; isError: 'normal' | 'error' };
	instaAccount: { value: string };
	callNumber: { value: string; isError: 'normal' | 'error' };
	registrationNumber: { value: string; isError: 'normal' | 'error' };
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
	setInitialValue: (data: StoreData) => void;
}
export const step1RequestStore = create<Step2Store>()(
	devtools((set) => ({
		step2Request: initialState,
		setStep2Request: (inputId: string, inputValue: string) =>
			set((state) => ({ step2Request: { ...state.step2Request, [inputId]: inputValue } })),
	})),
);
