import Image from 'next/image';
import styled from 'styled-components';

export const RegisteredStoreContainer = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 4px;
`;

export const RegisteredStoreContentWrapper = styled.div`
	position: relative;
	display: flex;
	padding: 28px;
`;

export const RegisteredStoreImage = styled(Image)`
	border-radius: 4px;
`;

export const RegisteredStoreDeleteBtn = styled.button`
	& > svg > path {
		fill: ${({ theme }) => theme.colors.gray_003};
	}
`;
