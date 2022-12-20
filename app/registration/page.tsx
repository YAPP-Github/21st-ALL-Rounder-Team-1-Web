'use client';
import { StyledLayout } from 'components/shared';
import { LargeBtn, ResistSmallBtn } from 'components/feature';

const Registration = () => {
	// const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			{/* <div>Registration Page 👋🏻</div>
			<div> counter : {count}</div>
			<div style={{ display: 'flex' }}>
				<button style={{ flex: 1, border: '1px solid black' }} type="button" onClick={() => setCount(count - 1)}>
					-
				</button>
				<button style={{ flex: 1, border: '1px solid black' }} type="button" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div> */}
			<br />
			<br />
			<LargeBtn width={240} btnText="임시저장" background="blue" />
			<br />
			<br />
			<LargeBtn width={200} btnText="임시저장" background="white" />
			<br />
			<br />
			<ResistSmallBtn width={76} btnText="번호 조회" />
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
