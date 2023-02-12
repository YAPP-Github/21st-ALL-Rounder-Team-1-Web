import { StepInputs } from 'types/storeRegistration';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import useUserSessionStore from './userSessionStore';

export interface Step1Inputs {
	name: { value: string; isError: 'normal'|'error' };
	email: { value: string; isError: 'normal'|'error' };
	phoneNumber: { value: string; isError: 'normal'|'error' };
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
}
// changeError: (inputId:string) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
// 		changeNormal: (inputId:string) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
export const step1Store = create<Step1Inputs>()(
	devtools((set, get) => ({
		name: { value: "", isError: 'normal' };
		email: { value: "", isError: 'normal' };
		phoneNumber: { value: "", isError: 'normal' };
		changeError: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'error' } })),
		changeNormal: (inputId: string) => void;

		onChangeBrandName: (productArrName: string, elementIdx: number, value: string) => {
			set(() => ({
				[productArrName]: get()[productArrName].map((item: Product['product'], idx: number) =>
					idx === elementIdx ? { ...item, brandName: value } : item,
				),
			}));
		},
		onChangeProductName: (productArrName: string, elementIdx: number, value: string) => {
			set(() => ({
				[productArrName]: get()[productArrName].map((item: Product['product'], idx: number) =>
					idx === elementIdx ? { ...item, productName: value } : item,
				),
			}));
		},
		changeError: () => {
			set(() => ({
				baseMakeUp: get().baseMakeUp.map((item) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
				bodyHair: get().bodyHair.map((item) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
				detergent: get().detergent.map((item) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
				ingredient: get().ingredient.map((item) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
				etc: get().etc.map((item) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
			}));
			return [...get().baseMakeUp, ...get().bodyHair, ...get().detergent, ...get().ingredient, ...get().etc].filter(
				(item) => item.isProductEmptyError === 'error',
			).length;
		},
		changeNormal: (productArrName: string, elementIdx: number) => {
			get()[productArrName][elementIdx].isProductEmptyError === 'error' &&
				set(() => ({
					[productArrName]: get()[productArrName].map((item: Product['product'], idx: number) =>
						idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item,
					),
				}));
		},
		setError: (productArrName: string) => {
			set(() => ({
				[productArrName]: get()[productArrName].map((item: { productName: string; brandName: string }) =>
					item.productName === '' && item.brandName !== '' ? { ...item, isProductEmptyError: 'error' } : item,
				),
			}));
			return get()[productArrName].filter((item) => item.isProductEmptyError === 'error').length;
		},
	})),
);
