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
	email: { value: string; isError: 'normal' | 'error'; formError: boolean };
	phoneNumber: { value: string; isError: 'normal' | 'error' };
	changeFormNormal: () => void;
	changeFormError: () => void;
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
	setInitialValue: (data: Step1Request) => void;
}
const initialState: Step1Request = {
	name: '',
	email: '',
	phoneNumber: '',
};

export const step1ErrorStore = create<Step1Error>()(
	devtools((set) => ({
		name: { value: '', isError: 'normal' },
		email: { value: '', isError: 'normal', formError: false },
		phoneNumber: { value: '', isError: 'normal' },
		setInitialValue: (data: Step1Request) => set(() => ({ Step1Request: data })),
		changeFormError: () => set((state) => ({ email: { ...state.email, formError: true } })),
		changeFormNormal: () => set((state) => ({ email: { ...state.email, formError: false } })),
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
