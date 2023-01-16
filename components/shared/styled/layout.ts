import Link from 'next/link';
import styled, { CSSProperties } from 'styled-components';

export const FlexBox = styled.div<CSSProperties>`
	display: ${({ display }) => display ?? 'flex'};
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
	align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
	justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
	flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
	gap: ${({ gap }) => gap ?? 0};
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

export const UnorderList = styled.ul<CSSProperties>`
	display: flex;
	align-items: center;
	gap: ${({ gap }) => gap};
`;

export const LinkWrapper = styled(Link)<CSSProperties>`
	display: flex;
	height: 100%;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
`;

export const RegistrationContentContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 40px 32px;
	width: 996px;
	height: fit-content;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
	border-radius: 0px 0px 16px 16px;
`;

export const TextFieldSection = styled.article`
	display: flex;
	width: 932px;
	height: 100px;
	flex-direction: column;
	align-items: flex-start;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_002};
	gap: 12px;
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
