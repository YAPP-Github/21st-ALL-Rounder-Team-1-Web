import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Step1Inputs {
	[index: string]: any;
	name: { value: string; isError: 'normal' | 'error' };
	email: { value: string; isError: 'normal' | 'error' };
	phoneNumber: { value: string; isError: 'normal' | 'error' };
	setStep1InputValue: (inputId: string, inputValue: string) => void;
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
}
export const step1Store = create<Step1Inputs>()(
	devtools((set) => ({
		name: { value: '', isError: 'normal' },
		email: { value: '', isError: 'normal' },
		phoneNumber: { value: '', isError: 'normal' },
		setStep1InputValue: (inputId: string, inputValue: string) =>
			set((state) => ({ [inputId]: { ...state[inputId], value: inputValue } })),
		changeError: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'error' } })),
		changeNormal: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'normal' } })),
	})),
);
