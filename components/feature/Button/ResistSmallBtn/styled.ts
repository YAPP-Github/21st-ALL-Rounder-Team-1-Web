import styled from 'styled-components';

export const SmallBtnContainer = styled.button<{ width: number }>`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: 48px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	padding: 15px 0;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
	& > span {
		display: block;
		color: ${({ theme }) => theme.colors.gray_007};
		font: ${({ theme }) => theme.fonts.button_001};
	}
`;
