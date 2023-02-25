import styled from 'styled-components';

export const FloatingBtnContainer = styled.button`
	width: 52px;
	height: 52px;
	border-radius: 50%;
	text-align: center;
	padding: 16px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
	background-color: ${({ theme }) => theme.colors.white};
	svg {
		display: block;
	}
`;
