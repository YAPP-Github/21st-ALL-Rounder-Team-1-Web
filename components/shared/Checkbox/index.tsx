import { InputHTMLAttributes } from 'react';
import { Typography } from 'components/shared';
import * as S from './styled';
import { CheckboxCheckedIcon } from 'public/static/icons';

type Props = {
	aggressive: 'headline_oneline_004' | 'headline_oneline_005';
	gap?: string;
	width?: string;
	height?: string;
	margin?: string;
	borderRadius?: string;
	description?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ aggressive, gap, width, height, margin, borderRadius, description, ...props }: Props) => {
	const { id, name, checked, onChange } = props;
	return (
		<S.Container htmlFor={id} margin={margin}>
			<S.Checkbox type="checkbox" id={id} name={name} checked={checked} onChange={onChange} />
			<S.RenderCheckbox width={width} height={height} borderRadius={borderRadius}>
				<CheckboxCheckedIcon />
			</S.RenderCheckbox>

			{description && (
				<Typography variant="span" aggressive={aggressive} margin={`0 0 0 ${gap}`}>
					{description}
				</Typography>
			)}
		</S.Container>
	);
};

export default Checkbox;
