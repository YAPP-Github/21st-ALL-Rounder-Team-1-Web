import { BottomIcon, TopIcon } from 'public/static/icons';
import { FloatingBtnContainer } from './styled';

interface Props {
	isTop: boolean; // true->to top, false->to bottom
}
const ScrollTopDownFloatingBtn = (props: Props) => {
	const handleScroll = (moveTo: 'top' | 'down') => {
		window.scrollTo({
			top: moveTo === 'top' ? 0 : document.documentElement.scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{props.isTop ? (
				<FloatingBtnContainer onClick={() => handleScroll('top')}>
					<TopIcon />
				</FloatingBtnContainer>
			) : (
				<FloatingBtnContainer onClick={() => handleScroll('down')}>
					<BottomIcon />
				</FloatingBtnContainer>
			)}
		</>
	);
};
export default ScrollTopDownFloatingBtn;
