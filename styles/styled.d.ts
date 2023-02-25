import React from 'react';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			white: '#ffffff';
			gray_000: '#F9F9FB';
			gray_001: '#F2F2F7';
			gray_002: '#E5E5EA';
			gray_003: '#C7C7CC';
			gray_004: '#8E8E93';
			gray_005: '#636366';
			gray_006: '#3A3A3C';
			gray_007: '#1C1C1E';
			primary_001: '#FFFCF1';
			primary_002: '#FFF8E1';
			primary_003: '#FFEBB2';
			primary_004: '#FFDF81';
			primary_005: '#FFD34D';
			primary_006: '#FFBF00';
			primary_007: '#FFB100';
			primary_008: '#FF9E00';
			primary_009: '#FF8D00';
			primary_010: '#FF6C00';
			error: '#F04700';
			success: '#44927F';
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
			body_multiline_000: FlattenSimpleInterpolation;
			body_multiline_001: FlattenSimpleInterpolation;
			body_multiline_002: FlattenSimpleInterpolation;
			body_multiline_003: FlattenSimpleInterpolation;
			body_multiline_004: FlattenSimpleInterpolation;
			body_multiline_005: FlattenSimpleInterpolation;
			button_000: FlattenSimpleInterpolation;
			button_001: FlattenSimpleInterpolation;
			tab_001: FlattenSimpleInterpolation;
			tab_002: FlattenSimpleInterpolation;
			caption_large: FlattenSimpleInterpolation;
			caption_medium: FlattenSimpleInterpolation;
			caption_small: FlattenSimpleInterpolation;
		};
	}
	export interface Styles {
		btnStyle: {
			white_btn: React.CSSProperties;
			black_btn: React.CSSProperties;
			primary_btn_001: React.CSSProperties;
			primary_btn_002: React.CSSProperties;
		};
	}
}
