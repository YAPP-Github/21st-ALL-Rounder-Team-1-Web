import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type Step1Request = {
	name: string;
	email: string;
	phoneNumber: string;
};
export interface Step1Store {
	step1Request: Step1Request;
	setStep1Request: (inputId: string, inputValue: string) => void;
}
export interface Step1Error {
	[index: string]: Function | Object;
	name: { value: string; isError: 'normal' | 'error' };
	email: { value: string; isError: 'normal' | 'error' };
	phoneNumber: { value: string; isError: 'normal' | 'error' };
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
	setinitialValue: (inputId: string, inputValue: string) => void;
}
const initialState: Step1Request = {
	name: '',
	email: '',
	phoneNumber: '',
};

export const step1ErrorStore = create<Step1Error>()(
	devtools((set) => ({
		name: { value: '', isError: 'normal' },
		email: { value: '', isError: 'normal' },
		phoneNumber: { value: '', isError: 'normal' },
		setinitialValue: (inputId: string, inputValue: string) =>
			set((state) => ({ [inputId]: { ...state[inputId], value: inputValue } })),
		changeError: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'error' } })),
		changeNormal: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'normal' } })),
	})),
);
export const step1RequestStore = create<Step1Store>()(
	devtools((set) => ({
		step1Request: initialState,
		setStep1Request: (inputId: string, inputValue: string) =>
			set((state) => ({ step1Request: { ...state.step1Request, [inputId]: inputValue } })),
	})),
);
