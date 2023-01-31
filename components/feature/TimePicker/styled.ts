import styled from 'styled-components';
import { SmallBtnContainer } from '../Button/StoreResistrationSmallBtn/styled';
export const TimePickerContainer = styled(SmallBtnContainer)`
	padding: 15px 82px;
	${({ theme }) => theme.fonts.button_001};
	&:disabled {
		background-color: ${({ theme }) => theme.colors.gray_001};
		color: ${({ theme }) => theme.colors.gray_003};
	}
	&:focus-within {
		border: 1px solid ${({ theme }) => theme.colors.gray_004};
	}
`;
export const TimeInput = styled.input`
	width: 24px;
	height: 18px;
	border-radius: 2px;
	text-align: center;
	margin: 0;
	padding: 0;
	${({ theme }) => theme.fonts.button_001};
	&:focus,
	&:hover {
		background-color: ${({ theme }) => theme.colors.gray_006};
		color: ${({ theme }) => theme.colors.white};
	}
	&:disabled {
		background-color: ${({ theme }) => theme.colors.gray_001};
		color: ${({ theme }) => theme.colors.gray_003};
	}
`;
export const CenterSpan = styled.span`
	margin: 0 18.5px;
	${({ theme }) => theme.fonts.button_001};
`;
