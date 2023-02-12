// Example UTCDateString : 2023-02-09T15:26:56
export const convertToHyphenDateFromUTC = (UTCDateString: string) => {
	const fullDateString = UTCDateString.split('T')[0];
	const [year, month, day] = fullDateString.split('-');
	return `${year}년 ${month}월 ${day}일`;
};
