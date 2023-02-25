import styled from 'styled-components';

export const SmallBtnContainer = styled.button`
	text-align: center;
	min-width: 106px;
	height: 48px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	padding: 15px 0;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
	${({ theme }) => theme.fonts.button_001};
	color: ${({ theme }) => theme.colors.gray_007};
`;
