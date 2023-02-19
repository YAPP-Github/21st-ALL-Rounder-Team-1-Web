import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { CenterSpan, TimeInput, TimePickerContainer } from './styled';

type Props = {
	value?: {
		startHour: string | undefined;
		startMinutes: string | undefined;
		endHour: string | undefined;
		endMinutes: string | undefined;
	};
	dayOffRef: (el: HTMLButtonElement) => void;
} & Omit<React.ComponentProps<'button'>, 'value'>;
const TimePicker = ({ value, dayOffRef, ...props }: Props) => {
	const [timePickerValue, setTimePickerValue] = useState('');
	const [timeValues, setTimeValues] = useState(
		value ?? {
			startHour: '10',
			startMinutes: '00',
			endHour: '22',
			endMinutes: '00',
		},
	);
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
		if (props.disabled) {
			setTimePickerValue('null');
			return;
		} else
			setTimePickerValue(`${timeValues.startHour}:${timeValues.startMinutes}~${timeValues.endHour}:${timeValues.endMinutes}`);
	}, [timeValues, props.disabled]);

	return (
		<TimePickerContainer
			name={props.name}
			id={props.id}
			value={timePickerValue}
			type="button"
			ref={dayOffRef}
			disabled={props.disabled ?? false}
		>
			<TimeInput
				onBlur={handleOnBlur}
				defaultValue={timeValues.startHour}
				name="startHour"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled ?? false}
			/>
			<span>:</span>
			<TimeInput
				onBlur={handleOnBlur}
				defaultValue={timeValues.startMinutes}
				name="startMinutes"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled ?? false}
			/>
			<CenterSpan>~</CenterSpan>
			<TimeInput
				onBlur={handleOnBlur}
				defaultValue={timeValues.endHour}
				name="endHour"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled ?? false}
			/>
			<span>:</span>
			<TimeInput
				onBlur={handleOnBlur}
				value={timeValues.endMinutes}
				name="endMinutes"
				type="text"
				maxLength={2}
				onChange={handleTimePickerValue}
				disabled={props.disabled ?? false}
			/>
		</TimePickerContainer>
	);
};
export default TimePicker;
