import styled from 'styled-components';
import { StyledMessage, StyledTextFiled } from '../TextField/styled';

export const BusinessTextFiled = styled(StyledTextFiled)`
	width: 320px;
`;

export const SuccessMessage = styled(StyledMessage)`
	color: ${({ theme }) => theme.colors.success};
`;
