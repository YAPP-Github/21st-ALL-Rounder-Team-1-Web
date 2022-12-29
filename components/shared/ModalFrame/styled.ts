import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.gray_007};
	opacity: 0.5;
	z-index: 9999;
`;

export const ContentWrapper = styled.div`
	padding: 40px 32px;
	border-radius: 16px;
	background: ${({ theme }) => theme.colors.white};
`;
