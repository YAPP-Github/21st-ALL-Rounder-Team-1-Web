import styled from 'styled-components';

export const StoreImageContainer = styled.button<{ inputFlag: 'normal' | 'error' }>`
	width: 343px;
	height: 160px;
	border-radius: 6px;
	border: 1px solid ${({ theme, inputFlag }) => (inputFlag === 'error' ? theme.colors.error : theme.colors.gray_002)};
	padding: 71px;
	background-color: ${({ theme }) => theme.colors.white};
	svg {
		display: block;
		margin: auto;
		padding: 0;
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
`;
export const ErrorMessage = styled.span`
	position: relative;
	top: -2px;
	${({ theme }) => theme.fonts.body_oneline_005};
	color: ${({ theme }) => theme.colors.error};
`;
