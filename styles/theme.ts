import { css, DefaultTheme } from 'styled-components';
import localFont from '@next/font/local';

const pretendard = localFont({
	src: [
		{
			path: '../public/static/fonts/Pretendard-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/static/fonts/Pretendard-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/static/fonts/Pretendard-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});
interface Font {
	weight: 400 | 500 | 700;
	size: number;
	height: number;
	spacing: number;
	fontFamily: string;
}

const fontStyleGenerator = ({ weight, size, height, spacing, fontFamily }: Font) => {
	return css`
		font-family: ${fontFamily};
		font-weight: ${weight};
		font-size: ${size}px;
		line-height: ${height}px;
		letter-spacing: ${spacing}px;
	`;
};

const theme: DefaultTheme = {
	colors: {
		gray_000: '#F9F9FB',
		gray_001: '#F2F2F7',
		gray_002: '#E5E5EA',
		gray_003: '#C7C7CC',
		gray_004: '#8E8E93',
		gray_005: '#636366',
		gray_006: '#3A3A3C',
		gray_007: '#1C1C1E',
		white: '#ffffff',
		error: '#F04700',
		success: '#44927F',
		primary_001: '#E5EFFF',
		primary_002: '#6B91FF',
		primary_003: '#0064FF',
	},
	fonts: {
		headline_001: fontStyleGenerator({ weight: 700, size: 48, height: 50, spacing: -1, fontFamily: pretendard.style.fontFamily }),
		headline_002: fontStyleGenerator({
			weight: 700,
			size: 32,
			height: 34,
			spacing: -0.6,
			fontFamily: pretendard.style.fontFamily,
		}),
		headline_003: fontStyleGenerator({
			weight: 700,
			size: 24,
			height: 26,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		headline_004: fontStyleGenerator({
			weight: 700,
			size: 20,
			height: 22,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_oneline_001: fontStyleGenerator({
			weight: 400,
			size: 17,
			height: 19,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_oneline_002: fontStyleGenerator({
			weight: 400,
			size: 16,
			height: 18,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_oneline_003: fontStyleGenerator({
			weight: 400,
			size: 15,
			height: 17,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_multiline_001: fontStyleGenerator({
			weight: 400,
			size: 17,
			height: 26,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_multiline_002: fontStyleGenerator({
			weight: 400,
			size: 16,
			height: 25,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		body_multiline_003: fontStyleGenerator({
			weight: 400,
			size: 15,
			height: 24,
			spacing: -0.4,
			fontFamily: pretendard.style.fontFamily,
		}),
		button_001: fontStyleGenerator({ weight: 500, size: 16, height: 18, spacing: -0.4, fontFamily: pretendard.style.fontFamily }),
	},
} as const;

export default theme;
