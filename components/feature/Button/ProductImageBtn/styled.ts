import styled from 'styled-components';

export const ProductImageContainer = styled.button`
	width: 96px;
	height: 108px;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	background-color: ${({ theme }) => theme.colors.white};
	svg {
		display: block;
		margin: auto;
		padding: 0;
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
`;
export const ProductErrorMeassage = styled.span`
	color: ${({ theme }) => theme.colors.error};
	display: inline-block;
	margin-top: 6px;
	padding: 0;
	${({ theme }) => theme.fonts.body_oneline_005};
`;
