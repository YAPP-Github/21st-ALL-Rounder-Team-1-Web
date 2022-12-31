import styled from 'styled-components';
import { BottomIcon } from 'public/static/icons';

export const DropDownContainer = styled.div`
	width: 75px;
	min-height: 48px;
	max-height: 91px;
	background: ${({ theme }) => theme.colors.white};
	border-radius: 8px;
	text-align: center;
	color: ${({ theme }) => theme.colors.gray_007};
	cursor: pointer;
`;
export const DropDownClosed = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	padding: 12px 8px;
	gap: 8px;
	width: 75px;
	height: 48px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 8px 8px 0px 0px;
`;
export const DownSection = styled.article`
	width: 75px;
	height: 42px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 0px 0px 8px 8px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_000};
	}
`;
export const Bottom = styled(BottomIcon)`
	& path {
		fill: ${({ theme }) => theme.colors.gray_007};
	}
`;
