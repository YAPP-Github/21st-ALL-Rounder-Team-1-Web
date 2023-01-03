import styled from 'styled-components';
export const TabContainer = styled.nav`
	width: 996px;
	height: 68px;
	display: flex;
	margin: 50px; //ui 확인용
`;
export const TabElement = styled.section`
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
	& > h1 {
		color: ${({ theme }) => theme.colors.gray_003};
	}
`;
