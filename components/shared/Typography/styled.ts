import styled from 'styled-components';

type ComponentProps = {
	aggressive:
		| 'headline_oneline_001'
		| 'headline_oneline_002'
		| 'headline_oneline_003'
		| 'headline_oneline_004'
		| 'headline_oneline_005'
		| 'headline_multiline_001'
		| 'headline_multiline_002'
		| 'body_oneline_000'
		| 'body_oneline_001'
		| 'body_oneline_002'
		| 'body_oneline_003'
		| 'body_oneline_004'
		| 'body_oneline_005'
		| 'body_multiline_000'
		| 'body_multiline_001'
		| 'body_multiline_002'
		| 'body_multiline_003'
		| 'body_multiline_005'
		| 'button_000'
		| 'button_001'
		| 'tab_001'
		| 'tab_002';
	margin?: string;
	padding?: string;
	color?: string;
	lineHeight?: string;
	align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
	whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap';
};

export const Component = styled.div<ComponentProps>`
	margin: ${({ margin }) => margin && margin};
	padding: ${({ padding }) => padding && padding};
	${({ aggressive, theme }) => theme.fonts[aggressive]};
	color: ${({ color }) => color && color};
	line-height: ${({ lineHeight }) => lineHeight && lineHeight};
	text-align: ${({ align }) => align && align};
	white-space: ${({ whiteSpace }) => whiteSpace && whiteSpace};
`;
