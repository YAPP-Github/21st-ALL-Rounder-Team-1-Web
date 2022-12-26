'use client';
import { styled } from '@tanstack/react-query-devtools/build/lib/utils';
import { LargeBtn, StyledLayout } from 'components/shared';
import { style } from 'styles/theme';

const Registration = () => {
	// const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			<br />
			<br />
			<br />
			<br />
			<LargeBtn style={style.btnStyle.blue_btn_002} onClick={() => alert('dpdp')}>
				다음 단계
			</LargeBtn>
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
