import styled, { CSSProperties } from 'styled-components';
import { StyledLayout } from 'components/shared';
import Link from 'next/link';
import Image from 'next/image';

export const MyPageSideBar = styled(StyledLayout.FlexBox)`
	flex-direction: column;
	width: 100%;
`;

export const MyPageNavigation = styled(Link)<CSSProperties>`
	padding: ${({ padding }) => padding};
	color: ${({ color }) => color};
`;

export const MyPageProfieSocialEmblem = styled(Image)`
	border: none;
`;
