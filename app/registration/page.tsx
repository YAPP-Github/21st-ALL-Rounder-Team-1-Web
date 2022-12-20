'use client';
import { StyledLayout } from 'components/shared';
import { SmallBtn } from 'components/feature';

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
			<SmallBtn width={106} btnText={'아무거나'} />
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
