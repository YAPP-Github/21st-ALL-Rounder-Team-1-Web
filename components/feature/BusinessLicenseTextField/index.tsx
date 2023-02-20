import { ChangeEvent, KeyboardEvent, RefObject, useState } from 'react';
import * as S from '../TextField/styled';

type Props = {
	inputFlag: 'normal' | 'error';
	isAuthorizedNumber: 'normal' | 'success' | 'error' | 'notClicked';
	businessLicenseTextFieldRef: RefObject<HTMLInputElement>;
} & React.ComponentProps<'input'>;

const BusinessLicenseTextField = ({
	placeholder,
	isAuthorizedNumber,
	businessLicenseTextFieldRef,
	inputFlag,
	...props
}: Props) => {
	const [businessLicense, setBusinessLicense] = useState<string | number | readonly string[]>(props.value ?? '');
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
				formFlag={false}
				readOnly={false}
				style={{ width: '320px' }}
				inputFlag={inputFlag}
				isAuthorizedNumber={isAuthorizedNumber}
				ref={businessLicenseTextFieldRef}
				type="search"
				placeholder={placeholder}
				name={props.name}
				id={props.id}
				value={businessLicense}
				disabled={isAuthorizedNumber === 'success'}
				onChange={handleBusinessLicense}
				onKeyDown={checkKey}
				onFocus={props.onFocus}
			/>
			{(inputFlag === 'error' || (isAuthorizedNumber === 'error' && businessLicense === '')) && (
				<S.StyledMessage>사업자 번호를 입력해주세요</S.StyledMessage>
			)}
			{businessLicense !== '' && isAuthorizedNumber === 'notClicked' && (
				<S.StyledMessage>우측의 버튼을 눌러 조회해주세요</S.StyledMessage>
			)}
			{isAuthorizedNumber === 'error' && businessLicense !== '' && <S.StyledMessage>사업자 번호를 확인해주세요</S.StyledMessage>}
			{isAuthorizedNumber === 'success' && <S.SuccessMessage>✓ 입점가능한 사업자 번호입니다.</S.SuccessMessage>}
		</S.TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
