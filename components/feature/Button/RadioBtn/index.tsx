import { RadioBtnContainer } from './styled';

// 어떤 요소인지 구분하기 위함. 추후 name 도 어떻게 해볼지 고민해봐야함
type Props = {
	value: string;
	name: string;
};
const RadioBtn = ({ value, name }: Props) => {
	return (
		<RadioBtnContainer htmlFor={value}>
			<input type="radio" name={name} id={value} value={value} />
			<span />
		</RadioBtnContainer>
	);
};
export default RadioBtn;
