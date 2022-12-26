import { Styles } from 'styled-components';
import theme from './theme';

const style: Styles = {
	btnStyle: {
		white_btn: {
			width: `${200}px`,
			backgroundColor: `${theme.colors.white}`,
			color: `${theme.colors.gray_007}`,
			border: `1px solid ${theme.colors.gray_004}`,
		},
		blue_btn_001: {
			width: `${200}px`,
			backgroundColor: `${theme.colors.primary_003}`,
			color: `${theme.colors.white}`,
		},
		blue_btn_002: {
			width: `${240}px`,
			backgroundColor: `${theme.colors.primary_003}`,
			color: `${theme.colors.white}`,
		},
	},
};
export default style;
