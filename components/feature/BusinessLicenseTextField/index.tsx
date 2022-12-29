import { ChangeEvent, useState } from 'react';
import { TextFieldContainer, StyledMessage } from '../TextField/styled';
import { BusinessTextFiled, SuccessMessage } from './styled';

interface Props {
	placeholder: string;
	flag?: string; // normal , success , error
}
const BusinessLicenseTextField = (props: Props) => {
	const [flag, setFlag] = useState(props.flag);
	const [businessLicense, setBusinessLicense] = useState('');
	const handleError = () => {
		if (flag === 'normal') return;
		setFlag('normal');
	};
	const handleBusinessLicense = (e: ChangeEvent<HTMLInputElement>) => {
		let newText = e.target.value;
		if (newText.length > 12) return;
		if (newText.length === 3 || newText.length === 6) {
			newText += '-';
		}
		setBusinessLicense(newText);
	};
	return (
		<TextFieldContainer>
			<BusinessTextFiled
				onFocus={handleError}
				flag={flag}
				placeholder={props.placeholder}
				type="search"
				value={businessLicense}
				onChange={handleBusinessLicense}
				disabled={flag === 'success'}
			/>
			{flag === 'error' && <StyledMessage>사업자 번호를 확인해주세요</StyledMessage>}
			{flag === 'success' && <SuccessMessage>✓ 입점가능한 사업자 번호입니다.</SuccessMessage>}
		</TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
