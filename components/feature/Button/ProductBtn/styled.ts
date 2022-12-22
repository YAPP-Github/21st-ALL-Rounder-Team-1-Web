import styled from 'styled-components';

export const ProductBtnContainer = styled.button`
	width: 48px;
	height: 48px;
	border-radius: 8px;
	text-align: center;
	padding: 17px;
	background-color: ${({ theme }) => theme.colors.gray_007};
	svg {
		display: block;
		padding: 0;
		& path {
			fill: ${({ theme }) => theme.colors.white};
		}
	}
`;