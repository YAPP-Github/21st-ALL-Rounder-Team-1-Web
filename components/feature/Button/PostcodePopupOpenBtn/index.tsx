import { useDaumPostcodePopup } from 'react-daum-postcode';
import { LargeBtn } from 'components/shared';
import style from 'styles/style';
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
		<LargeBtn style={style.btnStyle.white_btn} onClick={handlePostcodePopupOpenBtnClick}>
			우편번호 찾기
		</LargeBtn>
	);
};

export default PostcodePopupOpenBtn;
