import styled from 'styled-components';

export const LargeBtnContainer = styled.button<{ width: number; background: string }>`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: 50px;
	padding: 16px 0;
	border-radius: 10px;
	border: ${({ background, theme }) => background === 'white' && `${1}px solid ${theme.colors.gray_004}`};
	background-color: ${({ background, theme }) => (background === 'blue' ? theme.colors.primary_003 : theme.colors.white)};
	& > span {
		display: block;
		color: ${({ background, theme }) => (background === 'blue' ? theme.colors.white : theme.colors.gray_007)};
		font: ${({ theme }) => theme.fonts.button_001};
	}
`;
