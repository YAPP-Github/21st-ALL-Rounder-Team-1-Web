import { ChangeEvent, KeyboardEvent, RefObject, useState } from 'react';
import * as S from '../TextField/styled';
import style from 'styles/style';

type Props = {
	inputFlag: 'normal' | 'success' | 'error';
	businessLicenseTextFieldRef: RefObject<HTMLInputElement>;
	name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const BusinessLicenseTextField = ({ onMouseDown, businessLicenseTextFieldRef, name, inputFlag, ...props }: Props) => {
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
				style={style.textFieldWidth.textField_width_320}
				flag={inputFlag}
				ref={businessLicenseTextFieldRef}
				type="search"
				placeholder="입력해주세요"
				name={name}
				id={name}
				value={businessLicense}
				disabled={inputFlag === 'success'}
				onChange={handleBusinessLicense}
				onKeyDown={checkKey}
				onMouseDown={onMouseDown}
			/>

			{inputFlag === 'error' && <S.StyledMessage>사업자 번호를 확인해주세요</S.StyledMessage>}
			{inputFlag === 'success' && <S.SuccessMessage>✓ 입점가능한 사업자 번호입니다.</S.SuccessMessage>}
		</S.TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
