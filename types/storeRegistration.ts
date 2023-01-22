export interface Step1ManagerInfo {
	name: string; // 대표자명
	email: string; // 이메일
	phoneNumber: string; // 전화번호
}
export interface Step2StoreInfo {
	registrationNumber: string; // 사업자번호
	name: string; // 상호
	callNumber: string; // 매장 전화번호
	address: string; // 매장 주소
	latitude: string; // 위도
	longitude: string; // 경도
	imgPath: string; // 메징사진
	instaAccount: string; // 홍보 채널(optional)
	businessHour: string; // 운영시간
	notice: string; // 휴무일
}
