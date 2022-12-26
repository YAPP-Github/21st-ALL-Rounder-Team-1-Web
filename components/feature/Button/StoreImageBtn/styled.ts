import styled from 'styled-components';

export const StoreImageContainer = styled.button`
	width: 343px;
	height: 160px;
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	padding: 71px;
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