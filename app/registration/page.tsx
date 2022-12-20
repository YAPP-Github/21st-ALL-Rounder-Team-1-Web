'use client';
import { StyledLayout } from 'components/shared';
import { ProductBtn } from 'components/feature';

const Registration = () => {
	// const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			<ProductBtn isPlus={false} />
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
