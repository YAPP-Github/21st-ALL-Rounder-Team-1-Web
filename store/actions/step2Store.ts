import { Store } from 'hooks/api/store/useGetStore';
import { StoreData } from 'hooks/api/store/usePostStore';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface Step2Store {
	step2Request: StoreData;
	setStep2Request: (inputId: string, inputValue: string | string[] | null) => void;
}

const initialState: StoreData = {
	name: '',
	latitude: '',
	longitude: '',
	businessHour: '',
	notice: '',
	address: '',
	imgPath: null,
	instaAccount: null,
	callNumber: '',
	registrationNumber: '',
};

export interface Step2Error {
	[index: string]: Function | Object;
	name: { value: string; isError: 'normal' | 'error' };
	latitude: string;
	longitude: string;
	businessHour: string;
	notice: { value: string; isError: 'normal' | 'error' };
	storeZonecode: { value: string; isError: 'normal' | 'error' };
	basicAddress: { value: string; isError: 'normal' | 'error' };
	addressDetail: { value: string; isError: 'normal' | 'error' };
	imgPath: { value: string[]; isError: 'normal' | 'error' };
	instaAccount: string;
	callNumber: { value: string; isError: 'normal' | 'error' };
	registrationNumber: { value: string; isError: 'normal' | 'error' };
	setInputValue: (inputId: string, inputValue: string) => void;
	setInitialValue: (data: Store | null) => void;
	changeError: (inputId: string) => void;
	changeNormal: (inputId: string) => void;
}

export const step2ErrorStore = create<Step2Error>()(
	devtools((set) => ({
		name: { value: '', isError: 'normal' },
		latitude: '',
		longitude: '',
		businessHour: '',
		notice: { value: '', isError: 'normal' },
		storeZonecode: { value: '', isError: 'normal' },
		basicAddress: { value: '', isError: 'normal' },
		addressDetail: { value: '', isError: 'normal' },
		imgPath: { value: [''], isError: 'normal' },
		instaAccount: '',
		callNumber: { value: '', isError: 'normal' },
		registrationNumber: { value: '', isError: 'normal' },
		setInitialValue: (data: Store | null) => {
			if (data === null) return;
			set(() => ({
				name: { value: data.name, isError: 'normal' },
				businessHour: data.businessHour,
				notice: { value: data.notice, isError: 'normal' },
				storeZonecode: { value: data.address.split('#')[0], isError: 'normal' },
				basicAddress: { value: data.address.split('#')[1], isError: 'normal' },
				addressDetail: { value: data.address.split('#')[2], isError: 'normal' },
				imgPath: { value: [data.imgStore?.at(0)?.path ?? ''], isError: 'normal' },
				instaAccount: data.instaAccount ?? '',
				callNumber: { value: data.callNumber, isError: 'normal' },
				registrationNumber: { value: data.registrationNumber, isError: 'normal' },
			}));
		},
		setInputValue: (inputId: string, inputValue: string) =>
			set((state) => ({ [inputId]: { ...state.inputId, value: inputValue } })),
		changeError: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'error' } })),
		changeNormal: (inputId: string) => set((state) => ({ [inputId]: { ...state[inputId], isError: 'normal' } })),
	})),
);
export const step2RequestStore = create<Step2Store>()(
	devtools((set) => ({
		step2Request: initialState,
		setStep2Request: (inputId: string, inputValue: string | string[] | null) =>
			set((state) => ({ step2Request: { ...state.step2Request, [inputId]: inputValue } })),
	})),
);
