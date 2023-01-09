import { useDaumPostcodePopup } from 'react-daum-postcode';
import { LargeBtn } from 'components/shared';
import style from 'styles/style';

const PostcodePopupOpenBtn = () => {
	const openPostcodePopup = useDaumPostcodePopup();

	const handlePostcodePopupOpenBtnClick = () => {
		openPostcodePopup({ onComplete: handleComplete }).catch(() => console.error(`Daum Postcode Popup Error !`));
	};

	const handleComplete = (data: any) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress = extraAddress + data.bname;
			}

			if (data.buildingName !== '') {
				extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}

			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		console.info(fullAddress);
	};

	return (
		<LargeBtn style={style.btnStyle.white_btn} onClick={handlePostcodePopupOpenBtnClick}>
			우편번호 찾기
		</LargeBtn>
	);
};

export default PostcodePopupOpenBtn;
