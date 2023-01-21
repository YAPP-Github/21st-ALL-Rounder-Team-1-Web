import { RadioBtnContainer } from './styled';

// 어떤 요소인지 구분하기 위함. 추후 name 도 어떻게 해볼지 고민해봐야함
type Props = {
	value: string;
	name: string;
} & React.ComponentProps<'input'>;
const RadioBtn = ({ value, name, ...props }: Props) => {
	return (
		<RadioBtnContainer htmlFor={value}>
			<input
				type="radio"
				name={name}
				id={value}
				value={value}
				onChange={props.onChange}
				defaultChecked={props.defaultChecked ?? false}
			/>
			<span />
		</RadioBtnContainer>
	);
};
export default RadioBtn;
