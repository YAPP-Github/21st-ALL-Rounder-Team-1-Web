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
	product: { category: string; brandName: string; productName: string; isProductEmptyError: 'normal' | 'error' };
}
export interface Products {
	baseMakeUp: Array<Product['product']>;
	bodyHair: Array<Product['product']>;
	detergent: Array<Product['product']>;
	ingredient: Array<Product['product']>;
	etc: Array<Product['product']>;
	addProduct: (productArr: Array<Product['product']>) => void;
	removeProduct: (productArr: Array<Product['product']>, elementIdx: number) => void;
	onChangeBrandName: (productArr: Array<Product['product']>, elementIdx: number, value: string) => void;
	onChangeProductName: (productArr: Array<Product['product']>, elementIdx: number, value: string) => void;
	changeError: () => void;
	changeNormal: (productArr: Array<Product['product']>, elementIdx: number) => void;
}

export const useProductStore = create<Products>()(
	devtools((set, get) => ({
		baseMakeUp: [{ category: 'baseMakeUp', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		bodyHair: [{ category: 'bodyHair', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		detergent: [{ category: 'detergent', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		ingredient: [{ category: 'ingredient', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		etc: [{ category: 'etc', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		addProduct: (productArr: Array<Product['product']>) => {
			switch (productArr[0].category) {
				case 'baseMakeUp':
					set((state) => ({
						baseMakeUp: [
							{ category: 'baseMakeUp', brandName: '', productName: '', isProductEmptyError: 'normal' },
							...state.baseMakeUp,
						],
					}));
					break;
				case 'bodyHair':
					set((state) => ({
						bodyHair: [
							{ category: 'bodyHair', brandName: '', productName: '', isProductEmptyError: 'normal' },
							...state.bodyHair,
						],
					}));
					break;
				case 'detergent':
					set((state) => ({
						detergent: [
							{ category: 'detergent', brandName: '', productName: '', isProductEmptyError: 'normal' },
							...state.detergent,
						],
					}));
					break;
				case 'ingredient':
					set((state) => ({
						ingredient: [
							{ category: 'ingredient', brandName: '', productName: '', isProductEmptyError: 'normal' },
							...state.ingredient,
						],
					}));
					break;
				case 'etc':
					set((state) => ({
						etc: [{ category: 'etc', brandName: '', productName: '', isProductEmptyError: 'normal' }, ...state.etc],
					}));
					break;
			}
		},
		removeProduct: (productArr: Array<Product['product']>, elementIdx: number) => {
			switch (productArr[0].category) {
				case 'baseMakeUp':
					set(() => ({
						baseMakeUp: get().baseMakeUp.filter((_, idx) => idx !== elementIdx),
					}));
					break;
				case 'bodyHair':
					set(() => ({
						bodyHair: get().bodyHair.filter((_, idx) => idx !== elementIdx),
					}));
					break;
				case 'detergent':
					set(() => ({
						detergent: get().detergent.filter((_, idx) => idx !== elementIdx),
					}));
					break;
				case 'ingredient':
					set(() => ({
						ingredient: get().ingredient.filter((_, idx) => idx !== elementIdx),
					}));
					break;
				case 'etc':
					set(() => ({
						etc: get().etc.filter((_, idx) => idx !== elementIdx),
					}));
					break;
			}
		},
		onChangeBrandName: (productArr: Array<Product['product']>, elementIdx: number, value: string) => {
			switch (productArr[0].category) {
				case 'baseMakeUp':
					set(() => ({
						baseMakeUp: get().baseMakeUp.map((item, idx) => (idx === elementIdx ? { ...item, brandName: value } : item)),
					}));
					break;
				case 'bodyHair':
					set(() => ({
						bodyHair: get().bodyHair.map((item, idx) => (idx === elementIdx ? { ...item, brandName: value } : item)),
					}));
					break;
				case 'detergent':
					set(() => ({
						detergent: get().detergent.map((item, idx) => (idx === elementIdx ? { ...item, brandName: value } : item)),
					}));
					break;
				case 'ingredient':
					set(() => ({
						ingredient: get().ingredient.map((item, idx) => (idx === elementIdx ? { ...item, brandName: value } : item)),
					}));
					break;
				case 'etc':
					set(() => ({
						etc: get().etc.map((item, idx) => (idx === elementIdx ? { ...item, brandName: value } : item)),
					}));
					break;
			}
		},
		onChangeProductName: (productArr: Array<Product['product']>, elementIdx: number, value: string) => {
			switch (productArr[0].category) {
				case 'baseMakeUp':
					set(() => ({
						baseMakeUp: get().baseMakeUp.map((item, idx) => (idx === elementIdx ? { ...item, productName: value } : item)),
					}));
					break;
				case 'bodyHair':
					set(() => ({
						bodyHair: get().bodyHair.map((item, idx) => (idx === elementIdx ? { ...item, productName: value } : item)),
					}));
					break;
				case 'detergent':
					set(() => ({
						detergent: get().detergent.map((item, idx) => (idx === elementIdx ? { ...item, productName: value } : item)),
					}));
					break;
				case 'ingredient':
					set(() => ({
						ingredient: get().ingredient.map((item, idx) => (idx === elementIdx ? { ...item, productName: value } : item)),
					}));
					break;
				case 'etc':
					set(() => ({
						etc: get().etc.map((item, idx) => (idx === elementIdx ? { ...item, productName: value } : item)),
					}));
					break;
			}
		},
		changeError: () =>
			set(() => ({
				baseMakeUp: get().baseMakeUp.map((item) => (item.productName === '' ? { ...item, isProductEmptyError: 'error' } : item)),
				bodyHair: get().bodyHair.map((item) => (item.productName === '' ? { ...item, isProductEmptyError: 'error' } : item)),
				detergent: get().detergent.map((item) => (item.productName === '' ? { ...item, isProductEmptyError: 'error' } : item)),
				ingredient: get().ingredient.map((item) => (item.productName === '' ? { ...item, isProductEmptyError: 'error' } : item)),
				etc: get().etc.map((item) => (item.productName === '' ? { ...item, isProductEmptyError: 'error' } : item)),
			})),
		changeNormal: (productArr: Array<Product['product']>, elementIdx: number) => {
			switch (productArr[0].category) {
				case 'baseMakeUp':
					get().baseMakeUp[elementIdx].isProductEmptyError === 'error' &&
						set(() => ({
							baseMakeUp: get().baseMakeUp.map((item, idx) =>
								idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item,
							),
						}));
					break;
				case 'bodyHair':
					get().bodyHair[elementIdx].isProductEmptyError === 'error' &&
						set(() => ({
							bodyHair: get().bodyHair.map((item, idx) =>
								idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item,
							),
						}));
					break;
				case 'detergent':
					get().detergent[elementIdx].isProductEmptyError === 'error' &&
						set(() => ({
							detergent: get().detergent.map((item, idx) =>
								idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item,
							),
						}));
					break;
				case 'ingredient':
					get().ingredient[elementIdx].isProductEmptyError === 'error' &&
						set(() => ({
							ingredient: get().ingredient.map((item, idx) =>
								idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item,
							),
						}));
					break;
				case 'etc':
					get().etc[elementIdx].isProductEmptyError === 'error' &&
						set(() => ({
							etc: get().etc.map((item, idx) => (idx === elementIdx ? { ...item, isProductEmptyError: 'normal' } : item)),
						}));
					break;
			}
		},
	})),
);
