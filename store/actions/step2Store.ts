import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// TODO: step2 Store 리팩토링
// export type Step2Request = {
// 	name: string;
// 	latitude: number;
// 	longitude: number;
// 	businessHour: string;
// 	notice: string;
// 	address: string;
// 	imgPath: string[];
// 	instaAccount: string;
// 	callNumber: string;
// 	registrationNumber: string;
// };

// export interface Step2Store {
// 	Step2Request: Step2Request;
// 	setStep2Request: (inputId: string, inputValue: string) => void;
// }
// export interface Step1Error {
// 	[index: string]: Function | Object;
// 	name: { value: string; isError: 'normal' | 'error' };
// 	email: { value: string; isError: 'normal' | 'error' };
// 	phoneNumber: { value: string; isError: 'normal' | 'error' };
// 	changeError: (inputId: string) => void;
// 	changeNormal: (inputId: string) => void;
// 	setinitialValue: (inputId: string, inputValue: string) => void;
// }
// const initialState: Step2Request = {
// 	name: '',
// 	latitude: 0,
// 	longitude: 0,
// 	businessHour: '',
// 	notice: '',
// 	address: '',
// 	imgPath: [''],
// 	instaAccount: '',
// 	callNumber: '',
// 	registrationNumber: '',
// };
export interface stepInputs {
	inputArr: Array<'normal' | 'error'>;
	changeError: (id: number) => void;
	changeNormal: (id: number) => void;
}

export const useStep2Store = create<stepInputs>((set, get) => ({
	inputArr: ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
	changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
	changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
}));
