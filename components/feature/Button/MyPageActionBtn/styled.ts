import styled, { CSSProperties } from 'styled-components';

export const Button = styled.button<CSSProperties>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 100px;
	padding: 7px 13px;
	border: 1px solid ${({ borderColor }) => borderColor};
	border-radius: 4px;
	background-color: ${({ backgroundColor }) => backgroundColor};
	${({ theme }) => theme.fonts.body_oneline_004};
	color: ${({ color }) => color};
`;
