import * as S from './styled';
import { Typography } from 'components/shared';
import { ButtonHTMLAttributes } from 'react';
import theme from 'styles/theme';

type Props = {
	buttonTheme: 'black' | 'lightgray' | 'white' | 'primary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styleByButtonTheme = {
	black: {
		color: theme.colors.white,
		backgroundColor: theme.colors.gray_007,
		borderColor: theme.colors.gray_007,
	},
	lightgray: {
		color: theme.colors.gray_005,
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.gray_003,
	},
	white: {
		color: theme.colors.gray_006,
		backgroundColor: theme.colors.white,
		borderColor: theme.colors.gray_006,
	},
	primary: {
		color: theme.colors.white,
		backgroundColor: theme.colors.primary_010,
		borderColor: theme.colors.primary_010,
	},
} as const;

const MyPageActionBtn = (props: Props) => {
	const { buttonTheme, type, children, onClick } = props;

	return (
		<S.Button
			color={styleByButtonTheme[buttonTheme].color}
			backgroundColor={styleByButtonTheme[buttonTheme].backgroundColor}
			borderColor={styleByButtonTheme[buttonTheme].borderColor}
			type={type}
			onClick={onClick}
		>
			<Typography variant="span" aggressive="body_oneline_004">
				{children}
			</Typography>
		</S.Button>
	);
};

export default MyPageActionBtn;
