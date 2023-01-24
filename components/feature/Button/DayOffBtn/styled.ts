import styled, { css } from 'styled-components';
import { SmallBtnContainer } from '../StoreResistrationSmallBtn/styled';

export const DayOffBtnContainer = styled(SmallBtnContainer)<{ dayOff: boolean }>`
	${({ dayOff, theme }) =>
		dayOff &&
		css`
			color: ${theme.colors.primary_010};
			border: 1px solid ${theme.colors.primary_010};
			&:hover {
				background-color: ${theme.colors.white};
			}
		`}
	width:133px;
`;
