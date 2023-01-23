import { DayOffBtnContainer } from './styled';

type Props = {
	disabled: boolean;
};

const DayOffBtn = ({ disabled }: Props) => {
	return (
		<DayOffBtnContainer type="button" disabled={disabled}>
			휴무일로 지정
		</DayOffBtnContainer>
	);
};
export default DayOffBtn;
