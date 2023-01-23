import { StyledLayout } from 'components/shared';
import { TimePickerContainer, TimeInput, CenterSpan } from './styled';

const TimePicker = () => {
	return (
		<TimePickerContainer type="button" disabled>
			<TimeInput type="text" defaultValue={10} maxLength={2} onBlur={(e) => e.target.value.padStart(2, '0')} disabled />
			<span>:</span>
			<TimeInput
				type="text"
				defaultValue={'0'.padStart(2, '0')}
				maxLength={2}
				onBlur={(e) => e.target.value.padStart(2, '0')}
				disabled
			/>
			<CenterSpan>~</CenterSpan>
			<TimeInput type="text" defaultValue={22} maxLength={2} onBlur={(e) => e.target.value.padStart(2, '0')} disabled />
			<span>:</span>
			<TimeInput
				type="text"
				defaultValue={'0'.padStart(2, '0')}
				maxLength={2}
				onBlur={(e) => e.target.value.padStart(2, '0')}
				disabled
			/>
		</TimePickerContainer>
	);
};
export default TimePicker;
