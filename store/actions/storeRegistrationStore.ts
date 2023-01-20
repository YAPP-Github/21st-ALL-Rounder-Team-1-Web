import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export interface stepInputs {
	inputArr: Array<'normal' | 'success' | 'error'>;
	changeError: (id: number) => void;
	changeNormal: (id: number) => void;
}

export const useStep1Store = create<stepInputs>((set) => ({
	inputArr: ['normal', 'normal', 'normal'],
	changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
	changeNormal: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
}));
