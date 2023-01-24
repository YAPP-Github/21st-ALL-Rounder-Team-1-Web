import { ChangeEvent, FocusEvent, RefObject, useEffect, useState } from 'react';
import { TimePickerContainer, TimeInput, CenterSpan } from './styled';

type Props = {
	name: string;
	dayOffRef: RefObject<HTMLButtonElement>;
} & React.ComponentProps<'button'>;
const TimePicker = ({ name, dayOffRef, ...props }: Props) => {
	const [timePickerValue, setTimePickerValue] = useState('');
	const [timeValues, setTimeValues] = useState({
		startHour: '10',
		startMinutes: '00',
		endHour: '22',
		endMinutes: '00',
	});
	const handleTimePickerValue = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;

		setTimeValues({
			...timeValues,
			[name]: value,
		});
	};
	const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setTimeValues({
			...timeValues,
			[name]: value.padStart(2, '0'),
		});
	};
	useEffect(() => {
		setTimePickerValue(`${timeValues.startHour}:${timeValues.startMinutes}~${timeValues.endHour}:${timeValues.endMinutes}`);
	}, [timeValues]);
	return (
		<TimePickerContainer name={name} value={timePickerValue} type="button" ref={dayOffRef} disabled={props.disabled}>
			<TimeInput
				onBlur={handleOnBlur}
				value={timeValues.startHour}
				name="startHour"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled}
			/>
			<span>:</span>
			<TimeInput
				onBlur={handleOnBlur}
				value={timeValues.startMinutes}
				name="startMinutes"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled}
			/>
			<CenterSpan>~</CenterSpan>
			<TimeInput
				onBlur={handleOnBlur}
				value={timeValues.endHour}
				name="endHour"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled}
			/>
			<span>:</span>
			<TimeInput
				onBlur={handleOnBlur}
				value={timeValues.endMinutes}
				name="endMinutes"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled}
			/>
		</TimePickerContainer>
	);
};
export default TimePicker;
