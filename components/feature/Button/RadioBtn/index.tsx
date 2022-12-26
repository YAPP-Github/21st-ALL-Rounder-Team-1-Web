import { RadioBtnContainer } from './styled';

// 어떤 요소인지 구분하기 위함. 추후 name 도 어떻게 해볼지 고민해봐야함
interface Props {
	id: string;
}
const RadioBtn = (props: Props) => {
	return (
		<RadioBtnContainer htmlFor={props.id}>
			<input type="radio" id={props.id} name="임시" />
			<span />
		</RadioBtnContainer>
	);
};
export default RadioBtn;
