'use client';

import { useAtom } from 'jotai';
import { countAtom } from 'store/atoms';
import { StyledLayout } from 'components/shared';

const Registration = () => {
	const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			<div>Registration Page 👋🏻</div>
			<div> counter : {count}</div>
			<div style={{ display: 'flex' }}>
				<button style={{ flex: 1, border: '1px solid black' }} type="button" onClick={() => setCount(count - 1)}>
					-
				</button>
				<button style={{ flex: 1, border: '1px solid black' }} type="button" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
