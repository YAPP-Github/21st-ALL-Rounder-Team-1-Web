import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	background-color: #d9d9d9;
`;

export const GlobalNavigation = styled.nav`
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 80px;
`;

export const NavigationItem = styled(Link)<{ selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: ${({ selected }) => selected && '700'};
	color: ${({ selected, theme }) => (selected ? 'tomato' : theme.colors.black)};
`;
