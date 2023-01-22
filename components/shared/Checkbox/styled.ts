import styled, { CSSProperties } from 'styled-components';

export const Container = styled.label<CSSProperties>`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	margin: ${({ margin }) => margin};
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const Checkbox = styled.input<CSSProperties>`
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	cursor: pointer;

	& + span {
		border: 1px solid ${({ theme }) => theme.colors.gray_002};
		background-color: ${({ theme }) => theme.colors.white};
	}

	&:checked {
		& + span {
			border: 1px solid ${({ theme }) => theme.colors.primary_010};
			background-color: ${({ theme }) => theme.colors.primary_010};
		}
	}
`;

export const RenderCheckbox = styled.span<CSSProperties>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width ?? '22px'};
	height: ${({ height }) => height ?? '22px'};
	border-radius: ${({ borderRadius }) => borderRadius ?? '50%'};
`;
