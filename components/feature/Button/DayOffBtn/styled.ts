import styled, { css } from 'styled-components';
import { SmallBtnContainer } from '../StoreResistrationSmallBtn/styled';

export const DayOffBtnContainer = styled(SmallBtnContainer)<{ disabled: boolean }>`
	${({ disabled, theme }) =>
		disabled &&
		css`
			color: ${theme.colors.primary_010};
			border: 1px solid ${theme.colors.primary_010};
		`}
	width:133px;
`;
