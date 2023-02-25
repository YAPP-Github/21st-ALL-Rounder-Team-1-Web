export interface DaumPostcodeAttributes {
	userSelectedType: 'R' | 'J';
	zonecode: string;
	bname: string;
	buildingName: string;
	address: string;
	jibunAddress: string;
}

export type AddressPostcodeAttributes = Omit<DaumPostcodeAttributes, 'userSelectedType' | 'jibunAddress'>;

export type JibunAddressPostcodeAttributes = Pick<DaumPostcodeAttributes, 'zonecode' | 'jibunAddress'>;
