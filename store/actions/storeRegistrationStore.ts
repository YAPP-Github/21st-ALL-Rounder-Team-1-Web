import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export interface stepInputs {
	inputArr: Array<'normal' | 'error'>;
	changeError: (id: number) => void;
	changeNormal: (id: number) => void;
}

export const useStep1Store = create<stepInputs>((set, get) => ({
	inputArr: ['normal', 'normal', 'normal'],
	changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
	changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
}));
export const useStep2Store = create<stepInputs>((set, get) => ({
	inputArr: ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
	changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
	changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
}));
