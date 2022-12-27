import { useState } from 'react';
import { TextFieldContainer, StyledMessage } from '../TextField/styled';
import { BusinessTextFiled, SuccessMessage } from './styled';

interface Props {
	placeholder: string;
	isError?: boolean;
	isSuccess?: boolean;
}
const BusinessLicenseTextField = (props: Props) => {
	const [isError, setIsError] = useState(props.isError);
	const handleError = () => {
		if (!isError) return;
		setIsError((isError) => !isError);
	};
	return (
		<TextFieldContainer>
			<BusinessTextFiled
				onFocus={handleError}
				isError={isError}
				placeholder={props.placeholder}
				type="search"
				disabled={props.isSuccess}
			/>
			{isError && <StyledMessage>사업자 번호를 확인해주세요</StyledMessage>}
			{props.isSuccess && <SuccessMessage>✓ 입점가능한 사업자 번호입니다.</SuccessMessage>}
		</TextFieldContainer>
	);
};
export default BusinessLicenseTextField;
