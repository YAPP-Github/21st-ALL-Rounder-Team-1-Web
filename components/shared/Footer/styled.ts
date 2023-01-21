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
	padding-top: 24px;
`;

export const LegalDescWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
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

export const ChannelDescWrapper = styled(FlexBox)`
	height: 100%;
`;
