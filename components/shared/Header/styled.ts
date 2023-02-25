import { LinkWrapper } from 'components/shared/styled/layout';
import styled from 'styled-components';

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
	z-index: 100;
`;

export const GlobalNavigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	min-height: 78px;
`;

export const LogoWrapper = styled(LinkWrapper)`
	display: flex;
	align-items: center;
`;

export const NavigationItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${({ theme }) => theme.colors.gray_005};

	&:hover {
		opacity: 0.8;
	}
`;

export const LogoutBtn = styled.button`
	display: flex;
	align-items: center;
	height: 100%;
	color: ${({ theme }) => theme.colors.gray_005};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.gray_007};
	}
`;
