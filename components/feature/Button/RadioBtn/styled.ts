import styled from 'styled-components';

export const RadioBtnContainer = styled.label`
	cursor: pointer;
	display: inline-block;
	height: 24px;
	width: 24px;
	& > input {
		opacity: 0;
		height: 0;
		width: 0;
	}
	& > span {
		position: absolute;
		height: 24px;
		width: 24px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.white};
		border: 1px solid ${({ theme }) => theme.colors.gray_003};
	}
	& > input:checked ~ span:after {
		content: '';
		position: absolute;
		transform: translate(30%, 30%);
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.gray_007};
	}
	& > input:disabled ~ span {
		cursor: not-allowed;
		background: ${({ theme }) => theme.colors.gray_001};
	}
`;
