import styled from 'styled-components';

export const RegistrationHeaderContainer = styled.header`
	position: relative;
	width: 996px;
	height: 166px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 32px 32px 0 32px;
	gap: 16px;
	box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
	border-radius: 16px;
	margin-bottom: 24px;
`;
