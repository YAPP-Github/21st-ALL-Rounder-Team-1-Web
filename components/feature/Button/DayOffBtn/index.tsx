import { DayOffBtnContainer } from './styled';

type Props = {
	dayOff: boolean;
} & React.ComponentProps<'button'>;

const DayOffBtn = ({ dayOff, ...props }: Props) => {
	return (
		<DayOffBtnContainer type="button" dayOff={dayOff} onClick={props.onClick}>
			휴무일로 지정
		</DayOffBtnContainer>
	);
};
export default DayOffBtn;
