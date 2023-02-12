import { StepInputs } from 'types/storeRegistration';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const step1Store = create<StepInputs>()(
	devtools((set, get) => ({
		inputArr: ['normal', 'normal', 'normal'],
		changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
		changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
	})),
);
