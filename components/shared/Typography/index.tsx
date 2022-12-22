import { PropsWithChildren } from 'react';
import * as S from './styled';

type Props = {
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption' | 'span' | 'div';
	aggressive:
		| 'headline_001'
		| 'headline_002'
		| 'headline_003'
		| 'headline_004'
		| 'body_oneline_001'
		| 'body_oneline_002'
		| 'body_oneline_003'
		| 'body_multiline_001'
		| 'body_multiline_002'
		| 'body_multiline_003';
	margin?: string;
	padding?: string;
	color?: string;
	lineHeight?: string;
	align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
	whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap';
} & PropsWithChildren;

const Typography = ({ children, variant, aggressive, ...props }: Props) => {
	return (
		<S.Component as={variant} aggressive={aggressive} {...props}>
			{children}
		</S.Component>
	);
};

export default Typography;
