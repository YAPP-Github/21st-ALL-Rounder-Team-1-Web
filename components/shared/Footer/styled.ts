import Link from 'next/link';
import styled from 'styled-components';
import { FlexBox } from 'components/shared/styled/layout';

export const Container = styled.footer`
	display: flex;
	min-height: 180px;
	border-top: 1px solid ${({ theme }) => theme.colors.gray_002};
	background-color: ${({ theme }) => theme.colors.gray_000};
`;

export const InnerWrapper = styled(FlexBox)`
	position: relative;
	padding-top: 24px;
`;

export const LinkContentsWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-bottom: 14px;
`;

export const Anchor = styled(Link)`
	display: flex;
	align-items: center;
	height: inherit;
	color: ${({ theme }) => theme.colors.primary_010};

	& > span {
		color: ${({ theme }) => theme.colors.gray_006};
	}

	& > .service-introduce-btn > path {
		fill: ${({ theme }) => theme.colors.gray_006};
	}

	&:hover {
		text-decoration: underline;

		& > span {
			color: ${({ theme }) => theme.colors.primary_010};
		}

		& > .service-introduce-btn > path {
			fill: ${({ theme }) => theme.colors.primary_010};
		}
	}
`;

export const ChannelWrapper = styled(FlexBox)`
	position: absolute;
	bottom: 0;
	right: 0;
`;
