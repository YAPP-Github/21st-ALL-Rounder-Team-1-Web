import styled from 'styled-components';
import { StyledMessage } from '../TextField/styled';

export const SuccessMessage = styled(StyledMessage)`
	color: ${({ theme }) => theme.colors.success};
`;
