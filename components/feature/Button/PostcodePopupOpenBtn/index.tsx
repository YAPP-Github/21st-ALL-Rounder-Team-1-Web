import { useDaumPostcodePopup } from 'react-daum-postcode';
import { StoreResistrationSmallBtn } from 'components/feature';
import { DomainType } from 'types';

type Props = {
	onExtractedPostCode: (extractedPostcode: string[]) => void;
};

const PostcodePopupOpenBtn = (props: Props) => {
	const openPostcodePopup = useDaumPostcodePopup();

	const handlePostcodePopupOpenBtnClick = () => {
		openPostcodePopup({ onComplete: handleComplete }).catch(() => console.error(`Daum Postcode Popup Error !`));
	};

	const handleComplete = (data: DomainType.DaumPostcodeAttributes) => {
		// R(도로명) / J(지번)
		if (data.userSelectedType === 'R') {
			props.onExtractedPostCode(generateAddress(data));
		} else {
			props.onExtractedPostCode(generateJibunAddress(data));
		}
	};

	const generateAddress = (data: DomainType.AddressPostcodeAttributes) => {
		const { zonecode, address, buildingName } = data;
		return [zonecode, `${address} ${buildingName && `(${buildingName})`}`];
	};

	const generateJibunAddress = (data: DomainType.JibunAddressPostcodeAttributes) => {
		const { zonecode, jibunAddress } = data;
		return [zonecode, jibunAddress];
	};

	return (
		<StoreResistrationSmallBtn type="button" width={{ width: '106px' }} onClick={handlePostcodePopupOpenBtnClick}>
			주소 조회
		</StoreResistrationSmallBtn>
	);
};

export default PostcodePopupOpenBtn;
