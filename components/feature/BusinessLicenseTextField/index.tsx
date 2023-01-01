import { ChangeEvent, useState, KeyboardEvent } from 'react';
import style from 'styles/style';
import { TextFieldContainer, StyledMessage, StyledTextFiled } from '../TextField/styled';
import { SuccessMessage } from './styled';

interface Props {
	placeholder: string;
	flag: string; // normal , success , error
}
const BusinessLicenseTextField = ({ placeholder, ...props }: Props) => {
	const [flag, setFlag] = useState<string>(props.flag);
	const [businessLicense, setBusinessLicense] = useState<string>('');
	const [currentKey, setCurrentKey] = useState<string>('');
	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};
	const handleBusinessLicense = (e: ChangeEvent<HTMLInputElement>) => {
		// 나중에 한 번 더 체크
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
		<TextFieldContainer>
			<StyledTextFiled
				onFocus={handleError}
				flag={flag}
				style={style.textFieldWidth.textField_width_003}
				placeholder={placeholder}
				type="search"
				value={businessLicense}
				onChange={handleBusinessLicense}
				onKeyDown={checkKey}
				disabled={flag === 'success'}
			/>
			{flag === 'error' && <StyledMessage>사업자 번호를 확인해주세요</StyledMessage>}
			{flag === 'success' && <SuccessMessage>✓ 입점가능한 사업자 번호입니다.</SuccessMessage>}
		</TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
