import { BottonIcon, TopIcon } from 'public/static/icons';
import { FloatingBtnContainer } from './styled';

interface Props {
	isTop: boolean; // true->to top, false->to bottom
}
const FloatingBtn = (props: Props) => {
	const handleScroll = (isTop: boolean) => {
		if (isTop) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			{props.isTop ? (
				<FloatingBtnContainer onClick={() => handleScroll(props.isTop)}>
					<TopIcon />
				</FloatingBtnContainer>
			) : (
				<FloatingBtnContainer onClick={() => handleScroll(props.isTop)}>
					<BottonIcon />
				</FloatingBtnContainer>
			)}
		</>
	);
};
export default FloatingBtn;
