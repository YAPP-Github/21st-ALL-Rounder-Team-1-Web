'use client';
import { ProductImageBtn, StoreImageBtn } from 'components/feature';
import { StyledLayout } from 'components/shared';

const Registration = () => {
	// const [count, setCount] = useAtom(countAtom);

	return (
		<StyledLayout.BoxFlexCenter>
			<br />
			<br />
			<br />
			<StoreImageBtn />
			<br />
			<br />
			<br />
			<ProductImageBtn isError={true} />
		</StyledLayout.BoxFlexCenter>
	);
};

export default Registration;
