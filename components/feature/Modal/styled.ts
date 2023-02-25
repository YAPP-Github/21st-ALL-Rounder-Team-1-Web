import styled, { CSSProperties } from 'styled-components';

export const CancelAndDispatchBtnWrapper = styled.div<CSSProperties>`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
	gap: ${({ gap }) => gap && gap};
	width: ${({ width }) => width && width};
	max-height: 50px;

	& > button {
		flex: 1;
		border-radius: 8px;
	}
`;

export const SocialLoginBtnWrapper = styled(CancelAndDispatchBtnWrapper)`
	flex-direction: column;
	max-height: 60px;

	& > button {
		flex: 1;
		border-radius: 10px;
	}
`;
