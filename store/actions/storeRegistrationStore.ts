import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
export interface stepInputs {
	inputArr: Array<'normal' | 'error'>;
	changeError: (id: number) => void;
	changeNormal: (id: number) => void;
}

export const useStep1Store = create<stepInputs>()(
	devtools((set, get) => ({
		inputArr: ['normal', 'normal', 'normal'],
		changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
		changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
	})),
);
export const useStep2Store = create<stepInputs>()(
	devtools((set, get) => ({
		inputArr: ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
		changeError: (id) => set((state) => ({ inputArr: { ...state.inputArr, [id]: 'error' } })),
		changeNormal: (id) => get().inputArr[id] === 'error' && set((state) => ({ inputArr: { ...state.inputArr, [id]: 'normal' } })),
	})),
);
export interface Product {
	category: string;
	brandName: string;
	productName: string;
	isProductEmptyError: 'normal' | 'error';
}

export interface Products {
	baseMakeUp: Product[];
	bodyHair: Product[];
	detergent: Product[];
	ingredient: Product[];
	etc: Product[];
	addProduct: (productArrName: string) => void;
	removeProduct: (productArrName: string, elementIdx: number) => void;
	onChangeBrandName: (productArrName: string, elementIdx: number, value: string) => void;
	onChangeProductName: (productArrName: string, elementIdx: number, value: string) => void;
	changeError: () => number;
	changeNormal: (productArrName: string, elementIdx: number) => void;
	setError: (productArrName: string) => number;
}

export const useProductStore = create<Products>()(
	devtools((set, get) => ({
		baseMakeUp: [{ category: 'baseMakeUp', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		bodyHair: [{ category: 'bodyHair', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		detergent: [{ category: 'detergent', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		ingredient: [{ category: 'ingredient', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		etc: [{ category: 'etc', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		addProduct: (productArrName: string) => {
			if (get()[productArrName][0].productName !== '') {
				set((state) => ({
					[productArrName]: [
						{ category: { productArrName }, brandName: '', productName: '', isProductEmptyError: 'normal' },
						...state[productArrName],
					],
				}));
			} else {
				set(() => ({
					[productArrName]: get()[productArrName].map((item: Product['product'], idx: number) =>
						idx === 0 ? { ...item, isProductEmptyError: 'error' } : item,
					),
				}));
			}
		},
		removeProduct: (productArrName: string, elementIdx: number) => {
			set(() => ({
				[productArrName]: get()[productArrName].filter((_: Product['product'], idx: number) => idx !== elementIdx),
			}));
		},
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
