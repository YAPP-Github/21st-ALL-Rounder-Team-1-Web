import styled, { css } from 'styled-components';
export const TabContainer = styled.nav`
	width: 996px;
	height: 68px;
	display: flex;
`;
export const TabElement = styled.section<{ isSelected: boolean; borderRight: boolean }>`
	width: 332px;
	height: 68px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 82px;
	background-color: ${({ theme }) => theme.colors.gray_001};
	border-radius: 10px 10px 0px 0px;
	border-right: 1px solid #e7e7e8;
	${({ isSelected, theme }) =>
		isSelected &&
		css`
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
			background-color: ${theme.colors.white};
			border: none;
		`}
	${({ isSelected, borderRight }) =>
		!borderRight &&
		!isSelected &&
		css`
			border: none;
		`}
`;
