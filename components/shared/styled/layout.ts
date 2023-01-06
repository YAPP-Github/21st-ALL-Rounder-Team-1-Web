import Link from 'next/link';
import styled, { CSSProperties } from 'styled-components';

export const FlexBox = styled.div<CSSProperties>`
	display: ${({ display }) => display ?? 'flex'};
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
	align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
	justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
	flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
`;

export const MaxContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
`;

export const SubMaxContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 996px;
	margin: 0 auto;
`;

export const UnorderList = styled.ul`
	display: flex;
	align-items: center;
`;

export const LinkWrapper = styled(Link)`
	text-decoration: none;
	cursor: pointer;
`;

type ImageBoxProps = {
	width: string;
	height: string;
	backgroundImageSrc: string;
};

export const ImageBox = styled.div<ImageBoxProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background: ${({ backgroundImageSrc, theme }) => (backgroundImageSrc ? `url(${backgroundImageSrc})` : theme.colors.gray_001)};
	background-repeat: no-repeat;
`;

export const EmptyBoxDivider = styled.div<CSSProperties>`
	height: ${({ height }) => height};
`;
