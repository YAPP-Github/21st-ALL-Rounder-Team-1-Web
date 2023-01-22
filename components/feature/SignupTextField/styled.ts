import styled from 'styled-components';

export const SignupTextField = styled.input`
	width: 100%;
	height: 58px;
	padding: 20px 24px;
	border: 1px solid ${({ theme }) => theme.colors.gray_002};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.fonts.body_oneline_002};
	color: #636366;
`;
