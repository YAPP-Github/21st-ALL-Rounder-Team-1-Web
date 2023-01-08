import React from 'react';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			gray_000: '#F9F9FB';
			gray_001: '#F2F2F7';
			gray_002: '#E5E5EA';
			gray_003: '#C7C7CC';
			gray_004: '#8E8E93';
			gray_005: '#636366';
			gray_006: '#3A3A3C';
			gray_007: '#1C1C1E';
			white: '#ffffff';
			error: '#F04700';
			success: '#44927F';
			primary_001: '#E5EFFF';
			primary_002: '#6B91FF';
			primary_003: '#0064FF';
		};
		fonts: {
			headline_oneline_001: FlattenSimpleInterpolation;
			headline_oneline_002: FlattenSimpleInterpolation;
			headline_oneline_003: FlattenSimpleInterpolation;
			headline_oneline_004: FlattenSimpleInterpolation;
			headline_oneline_005: FlattenSimpleInterpolation;
			headline_multiline_001: FlattenSimpleInterpolation;
			headline_multiline_002: FlattenSimpleInterpolation;
			body_oneline_000: FlattenSimpleInterpolation;
			body_oneline_001: FlattenSimpleInterpolation;
			body_oneline_002: FlattenSimpleInterpolation;
			body_oneline_003: FlattenSimpleInterpolation;
			body_oneline_004: FlattenSimpleInterpolation;
			body_oneline_005: FlattenSimpleInterpolation;
			body_multiline_001: FlattenSimpleInterpolation;
			body_multiline_002: FlattenSimpleInterpolation;
			body_multiline_003: FlattenSimpleInterpolation;
			body_multiline_005: FlattenSimpleInterpolation;
			button_001: FlattenSimpleInterpolation;
			tab_001: FlattenSimpleInterpolation;
			tab_002: FlattenSimpleInterpolation;
		};
	}
	export interface Styles {
		btnStyle: {
			white_btn: React.CSSProperties;
			black_btn: React.CSSProperties;
			blue_btn_001: React.CSSProperties;
			blue_btn_002: React.CSSProperties;
		};
		textFieldWidth: {
			textField_width_001: React.CSSProperties;
			textField_width_002: React.CSSProperties;
			textField_width_003: React.CSSProperties;
			textField_width_004: React.CSSProperties;
		};
	}
}
