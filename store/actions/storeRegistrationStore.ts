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
	cleanser: Array<Product['product']>;
	ingredient: Array<Product['product']>;
	etc: Array<Product['product']>;
	addProduct: (productArr: Array<Product['product']>) => void;
	// changeProductEmptyError: (productArr: Product[], id: any) => void;
}

export const useProductStore = create<Products>()(
	devtools((set) => ({
		baseMakeUp: [{ category: 'baseMakeUp', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		bodyHair: [{ category: 'bodyHair', brandName: '', productName: '', isProductEmptyError: 'normal' }],
		cleanser: [{ category: 'cleanser', brandName: '', productName: '', isProductEmptyError: 'normal' }],
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
				case 'cleanser':
					set((state) => ({
						cleanser: [{ category: 'cleanser', brandName: '', productName: '', isProductEmptyError: 'normal' }, ...state['세제']],
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
						etc: [{ category: 'etc', brandName: '', productName: '', isProductEmptyError: 'normal' }, ...state['기타']],
					}));
					break;
			}
		},

		// changeProductEmptyError: (productArr: any, id: any) =>productArr===get
		// 	set((state) => ({: { ...state.productArr, [id]: { ...state.productArr[id], isProductEmptyError: 'error' } } })),
	})),
);
