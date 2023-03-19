import styled from 'styled-components';

export const TextFieldContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;
export const StyledTextFiled = styled.input<{
	formFlag: boolean | undefined;
	inputFlag: 'normal' | 'error' | 'success' | 'notClicked' | 'fail';
	readOnly: boolean;
}>`
	border: 1px solid
		${({ theme, inputFlag, formFlag }) =>
			inputFlag === 'error' || formFlag === true || inputFlag === 'fail' || inputFlag === 'notClicked'
				? theme.colors.error
				: theme.colors.gray_002};
	padding: 8px 16px;
	height: 48px;
	border-radius: 10px;
	${({ theme }) => theme.fonts.body_oneline_002};
	&:focus {
		border: ${({ theme, readOnly }) => !readOnly && `1px solid ${theme.colors.gray_004}`};
	}
	::-webkit-search-cancel-button {
		-webkit-appearance: none;
		width: 15px;
		height: 15px;
		background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.1875 12.6L9 9.7875L11.8125 12.6L12.6 11.8125L9.7875 9L12.6 6.1875L11.8125 5.4L9 8.2125L6.1875 5.4L5.4 6.1875L8.2125 9L5.4 11.8125L6.1875 12.6ZM9 16.5C7.975 16.5 7.00625 16.3031 6.09375 15.9094C5.18125 15.5156 4.38438 14.9781 3.70312 14.2969C3.02188 13.6156 2.48437 12.8188 2.09062 11.9062C1.69687 10.9937 1.5 10.025 1.5 9C1.5 7.9625 1.69687 6.9875 2.09062 6.075C2.48437 5.1625 3.02188 4.36875 3.70312 3.69375C4.38438 3.01875 5.18125 2.48437 6.09375 2.09062C7.00625 1.69687 7.975 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09062C12.8375 2.48437 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.025 16.3031 10.9937 15.9094 11.9062C15.5156 12.8188 14.9813 13.6156 14.3063 14.2969C13.6313 14.9781 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5Z' fill='%23C7C7CC'/%3E%3C/svg%3E")
			center center no-repeat;
		cursor: pointer;
	}
	::placeholder {
		color: ${({ theme }) => theme.colors.gray_003};
	}
`;

export const StyledMessage = styled.span`
	display: block;
	padding: 0px 8px;
	gap: 8px;
	${({ theme }) => theme.fonts.body_oneline_005};
	margin-top: 6px;
	color: ${({ theme }) => theme.colors.error};
`;
export const SuccessMessage = styled(StyledMessage)`
	color: ${({ theme }) => theme.colors.success};
`;
