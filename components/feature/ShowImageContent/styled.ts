import styled from 'styled-components';

export const ShowImageContainer = styled.div<{ width: number; height: number }>`
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	border-radius: 6px;
	position: relative;
	img {
		border-radius: 6px;
	}
`;
export const DeleteBar = styled.div<{ width: number }>`
	position: absolute;
	bottom: 0;
	width: ${({ width }) => `${width}px`};
	height: 28px;
	border-radius: 0 0 6px 6px;
	background: ${({ theme }) => theme.colors.gray_007};
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	padding: 6.5px;
	justify-content: flex-end;
	align-items: center;
	svg {
		width: 15px;
		height: 15px;
		& path {
			fill: ${({ theme }) => theme.colors.white};
		}
		cursor: pointer;
	}
`;
