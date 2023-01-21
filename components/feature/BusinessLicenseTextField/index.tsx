import { ChangeEvent, KeyboardEvent, RefObject, useState } from 'react';
import * as S from '../TextField/styled';

type Props = {
	inputFlag: 'normal' | 'error';
	isAuthorizedNumber: 'normal' | 'success' | 'error' | 'notClicked';
	businessLicenseTextFieldRef: RefObject<HTMLInputElement>;
} & React.ComponentProps<'input'>;

const BusinessLicenseTextField = ({ isAuthorizedNumber, businessLicenseTextFieldRef, inputFlag, ...props }: Props) => {
	const [businessLicense, setBusinessLicense] = useState<string>('');
	const [currentKey, setCurrentKey] = useState<string>('');
	const handleBusinessLicense = (e: ChangeEvent<HTMLInputElement>) => {
		let newText = e.target.value;
		const num = /[-0-9]/;
		if (newText.length > 0 && !num.test(newText[newText.length - 1])) return;
		if (newText.length > 12) return;
		if (newText.length === 12) {
			setBusinessLicense(newText.replace(/-/g, '').replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3'));
			return;
		}
		if (currentKey !== 'Backspace' && (newText.length === 3 || newText.length === 6)) {
			newText += '-';
		}
		setBusinessLicense(newText.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3'));
	};

	const checkKey = (e: KeyboardEvent<HTMLInputElement>) => {
		setCurrentKey(() => e.key);
	};

	return (
		<S.TextFieldContainer>
			<S.StyledTextFiled
				readOnly={false}
				style={{ width: '320px' }}
				inputFlag={inputFlag}
				isAuthorizedNumber={isAuthorizedNumber}
				ref={businessLicenseTextFieldRef}
				type="search"
				placeholder="입력해주세요"
				name={props.name}
				id={props.id}
				value={businessLicense}
				disabled={isAuthorizedNumber === 'success'}
				onChange={handleBusinessLicense}
				onKeyDown={checkKey}
				onFocus={props.onFocus}
			/>
			{inputFlag === 'error' && <S.StyledMessage>사업자 번호를 입력해주세요</S.StyledMessage>}
			{props.value !== '' && isAuthorizedNumber === 'notClicked' && (
				<S.StyledMessage>우측의 버튼을 눌러 조회해주세요</S.StyledMessage>
			)}
			{isAuthorizedNumber === 'error' && <S.StyledMessage>사업자 번호를 확인해주세요</S.StyledMessage>}
			{isAuthorizedNumber === 'success' && <S.SuccessMessage>✓ 입점가능한 사업자 번호입니다.</S.SuccessMessage>}
		</S.TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
