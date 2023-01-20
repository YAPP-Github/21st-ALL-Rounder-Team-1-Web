import { create } from 'zustand';

interface stepInputs {
	inputArr: string[];
	changeError: (id: number) => void;
	changeNormal: (id: number) => void;
}

const useStep1Store = create<stepInputs>((set) => ({
	inputArr: ['normal', 'normal', 'normal'],
	changeError: (id) =>
		set((state) => ({ inputArr: state.inputArr.map((inputFlag: string, idx: number) => (idx === id ? 'error' : inputFlag)) })),

	changeNormal: (id) =>
		set((state) => ({ inputArr: state.inputArr.map((inputFlag: string, idx: number) => (idx === id ? 'normal' : inputFlag)) })),
}));
