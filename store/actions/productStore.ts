import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Product {
	[index: number]: any;
	id: number;
	category: string;
	brandName: string;
	productName: string;
	isProductEmptyError: 'normal' | 'error';
}

export interface Products {
	[index: string]: any;
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

export const productStore = create<Products>()(
	devtools((set, get) => ({
		baseMakeUp: [{ id: 0, category: 'baseMakeUp', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		bodyHair: [{ id: 0, category: 'bodyHair', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		detergent: [{ id: 0, category: 'detergent', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		ingredient: [{ id: 0, category: 'ingredient', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		etc: [{ id: 0, category: 'etc', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		addProduct: (productArrName: string) => {
			if (get().productArrName[0].productName !== '') {
				set((state) => ({
					[productArrName]: [
						{ category: { productArrName }, brandName: '', productName: '', isProductEmptyError: 'normal' },
						...state[productArrName],
					],
				}));
			} else {
				set(() => ({
					[productArrName]: get().productArrName.map((item: Product, idx: number) =>
						idx === 0 ? { ...item, isProductEmptyError: 'error' } : item,
					),
				}));
			}
		},
		removeProduct: (productArrName: string, elementIdx: number) => {
			set(() => ({
				[productArrName]: get()[productArrName].filter((_: any, idx: number) => idx !== elementIdx),
			}));
		},
		onChangeBrandName: (productArrName: string, elementIdx: number, value: string) => {
			set(() => ({
				[productArrName]: get()[productArrName].map((item: Product, idx: number) =>
					idx === elementIdx ? { ...item, brandName: value } : item,
				),
			}));
		},
		onChangeProductName: (productArrName: string, elementIdx: number, value: string) => {
			set(() => ({
				[productArrName]: get()[productArrName].map((item: Product, idx: number) =>
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
					[productArrName]: get()[productArrName].map((item: Product, idx: number) =>
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
			return get()[productArrName].filter((item: Product) => item.isProductEmptyError === 'error').length;
		},
	})),
);
