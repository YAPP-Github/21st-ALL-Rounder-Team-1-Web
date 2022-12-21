import styled from 'styled-components';

export const ProductImageContainer = styled.button<{ isError: boolean }>`
	width: 96px;
	height: 108px;
	border-radius: 8px;
	border: 1px solid ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.gray_002)};
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
export const ProductErrorMeassage = styled.span`
	color: ${({ theme }) => theme.colors.error};
	display: inline-block;
	margin-top: 6px;
	padding: 0;
	//font는 답변 온 후에 바꿔서 적용
	font: ${({ theme }) => theme.fonts.body_oneline_001};
`;
