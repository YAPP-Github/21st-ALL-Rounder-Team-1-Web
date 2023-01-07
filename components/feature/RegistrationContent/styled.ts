import styled from 'styled-components';

export const RegistrationContentContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 40px 32px;
	width: 996px;
	height: fit-content;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
	border-radius: 0px 0px 16px 16px;
`;
