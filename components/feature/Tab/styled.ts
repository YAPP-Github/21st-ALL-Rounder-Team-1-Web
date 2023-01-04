import styled, { css } from 'styled-components';
export const TabContainer = styled.nav`
	width: 996px;
	height: 68px;
	display: flex;
	margin: 50px; //ui 확인용
`;
export const TabElement = styled.section<{ isSelected: boolean }>`
	margin-top: 50px; //ui 확인용
	width: 332px;
	height: 68px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 82px;
	background-color: ${({ theme }) => theme.colors.gray_001};
	border-radius: 10px 10px 0px 0px;
	${({ isSelected, theme }) =>
		isSelected &&
		css`
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
			background-color: ${theme.colors.white};
		`}
`;
