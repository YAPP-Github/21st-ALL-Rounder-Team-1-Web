'use client';
import { LargeBtn, StyledLayout } from 'components/shared';
import style from 'styles/style';

const Registration = () => {
	// const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			<br />
			<br />
			<br />
			<br />
			<LargeBtn style={style.btnStyle.blue_btn_002} onClick={() => alert('얏호 개선완료')}>
				다음 단계
			</LargeBtn>
			<br />
			<br />
			<br />
			<br />
			<LargeBtn style={style.btnStyle.blue_btn_001} onClick={() => alert('얏호 히히')}>
				다음 단계
			</LargeBtn>
			<br />
			<br />
			<br />
			<br />
			<LargeBtn style={style.btnStyle.white_btn} onClick={() => alert('얏호 호호')}>
				다음 단계
			</LargeBtn>
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
