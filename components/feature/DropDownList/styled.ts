import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 75px;
	background: ${({ theme }) => theme.colors.white};
	text-align: center;
	color: ${({ theme }) => theme.colors.gray_007};
	cursor: pointer;
	svg {
		width: 12.05px;
		margin-left: 5.95px;
		height: 7.1px;
		& path {
			fill: ${({ theme }) => theme.colors.gray_007};
		}
	}
`;
export const DropDownClosed = styled.button`
	width: 75px;
	height: 48px;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding-right: 13px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	&:focus {
		border-radius: 8px 8px 0px 0px;
	}
`;
export const DownContainer = styled.div<{ isOpen: boolean }>`
	width: 75px;
	display: flex;
	flex-direction: column;
	visibility: hidden;
	${({ isOpen }) =>
		isOpen &&
		css`
			visibility: visible;
		`}
	z-index:1;
`;
export const DownSection = styled.article`
	width: 75px;
	height: 42px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0px 0px 8px 8px;
	border-top: none;
	display: flex;
	padding: 0 21px;
	align-items: center;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
`;
