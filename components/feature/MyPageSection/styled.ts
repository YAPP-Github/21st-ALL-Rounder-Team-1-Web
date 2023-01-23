import styled from 'styled-components';

export const SectionDescriptionWrapper = styled.ul`
	padding: 24px 40px;
	background-color: ${({ theme }) => theme.colors.gray_000};
`;

export const SectionDescription = styled.li`
	color: ${({ theme }) => theme.colors.gray_005};
`;

export const MyPageOneActionDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	margin-top: 40px;
	padding: 65px 0 73px 0;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.gray_005};
`;

export const MyPageSectionDescriptionWarpper = styled.ul`
	margin: 28px 0 24px 0;
	padding: 24px 40px;
	background-color: ${({ theme }) => theme.colors.gray_000};
`;

export const MyPageSectionDescription = styled.li`
	${({ theme }) => theme.fonts.body_multiline_003};
	list-style: disc;
	color: ${({ theme }) => theme.colors.gray_005};
`;
