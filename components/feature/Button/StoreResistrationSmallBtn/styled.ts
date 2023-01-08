import styled from 'styled-components';

export const SmallBtnContainer = styled.button<{ width: number }>`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: 48px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	padding: 15px 0;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}

	color: ${({ theme }) => theme.colors.gray_007};
`;
