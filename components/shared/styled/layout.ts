import Link from 'next/link';
import styled from 'styled-components';

export const BoxFlexColumnCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const MaxContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 1200px;
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
