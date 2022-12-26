import { RadioBtnContainer } from './styled';

const RadioBtn = () => {
	return (
		<RadioBtnContainer htmlFor="임시">
			<input type="radio" id="임시" name="임시" />
			<span />
		</RadioBtnContainer>
	);
};
export default RadioBtn;
