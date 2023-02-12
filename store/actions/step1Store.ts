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
	name: { isError: 'normal' | 'error' };
	email: { isError: 'normal' | 'error' };
	phoneNumber: { isError: 'normal' | 'error' };
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
}
const initialState: Step1Request = {
	name: '',
	email: '',
	phoneNumber: '',
};

export const step1ErrorStore = create<Step1Error>()(
	devtools((set) => ({
		name: { isError: 'normal' },
		email: { isError: 'normal' },
		phoneNumber: { isError: 'normal' },
		changeError: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'error' } })),
		changeNormal: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'normal' } })),
	})),
);
export const step1RequestStore = create<Step1Store>()(
	devtools((set) => ({
		step1Request: initialState,
		setStep1Request: (inputId: string, inputValue: string) => set((state) => ({ [inputId]: { ...state, inputId: inputValue } })),
	})),
);
