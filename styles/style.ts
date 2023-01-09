import { Styles } from 'styled-components';
import theme from './theme';

const style: Styles = {
	btnStyle: {
		white_btn: {
			width: `200px`,
			backgroundColor: `${theme.colors.white}`,
			color: `${theme.colors.gray_007}`,
			border: `1px solid ${theme.colors.gray_004}`,
		},
		black_btn: {
			width: `200px`,
			backgroundColor: `${theme.colors.gray_007}`,
			color: `${theme.colors.white}`,
		},

		primary_btn_001: {
			width: `200px`,
			backgroundColor: `${theme.colors.primary_010}`,
			color: `${theme.colors.white}`,
		},
		primary_btn_002: {
			width: `240px`,
			backgroundColor: `${theme.colors.primary_010}`,

			color: `${theme.colors.white}`,
		},
	},

	textFieldWidth: {
		textField_width_123: { width: `123px` },
		textField_width_278: { width: `278px` },
		textField_width_320: { width: `320px` },
		textField_width_560: { width: `560px` },
	},
};
export default style;
