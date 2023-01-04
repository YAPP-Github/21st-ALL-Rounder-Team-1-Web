import { ChangeEvent, KeyboardEvent, useState } from 'react';
import style from 'styles/style';
import * as S from '../TextField/styled';
// 다른 TextField와는 다르게 입력값 처리할 예정
// 이유 1: 입력할 때 하이픈을 넣어줘야 함
// 이유2: 하이픈 넣어준 것 제외한 값을 서버에 넘겨야 함
type Props = {
	name: string;
	flag: string; // normal , success , error
};
const BusinessLicenseTextField = ({ name, ...props }: Props) => {
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
		<S.TextFieldContainer>
			<S.StyledTextFiled
				onFocus={handleError}
				name={name}
				flag={flag}
				style={style.textFieldWidth.textField_width_003}
				placeholder="입력해주세요"
				type="search"
				value={businessLicense}
				onChange={handleBusinessLicense}
				onKeyDown={checkKey}
				disabled={flag === 'success'}
			/>
			{flag === 'error' && <S.StyledMessage>사업자 번호를 확인해주세요</S.StyledMessage>}
			{flag === 'success' && <S.SuccessMessage>✓ 입점가능한 사업자 번호입니다.</S.SuccessMessage>}
		</S.TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
