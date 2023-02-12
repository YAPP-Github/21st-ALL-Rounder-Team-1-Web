import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 100vw;
	min-height: 100vh;
	z-index: 9999;
`;

export const ModalBackdrop = styled.div`
	position: fixed;
	inset: 0;
	background-color: ${({ theme }) => theme.colors.gray_007};
	opacity: 0.5;
	width: 100vw;
	height: 100vh;
	z-index: 5000;
`;

export const ContentWrapper = styled.div`
	padding: 40px 32px;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;
