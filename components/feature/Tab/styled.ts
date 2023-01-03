import styled, { css } from 'styled-components';
export const TabContainer = styled.nav`
	width: 996px;
	height: 68px;
	display: flex;
	margin: 50px; //ui 확인용
`;
export const TabElement = styled.section<{ isCurrentStep: boolean }>`
	margin-top: 50px; //ui 확인용
	width: 332px;
	height: 68px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 16px 82px;
	background-color: ${({ theme }) => theme.colors.gray_001};
	color: ${({ theme }) => theme.colors.gray_004};
	border-radius: 10px 10px 0px 0px;
	& > h2 {
		color: ${({ theme }) => theme.colors.gray_003};
	}
	${({ isCurrentStep, theme }) =>
		isCurrentStep &&
		css`
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.06);
			background-color: ${theme.colors.white};
			color: ${theme.colors.gray_007};
			${theme.fonts.tab_001};
			& > h2 {
				color: ${theme.colors.primary_003};
				${theme.fonts.body_oneline_005};
			}
		`}
`;
