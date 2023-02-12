'use client';

import { Provider } from 'jotai';
import styled, { ThemeProvider } from 'styled-components';
import QueryProvider from 'app/Provider';
import StyledComponentsRegistry from './RootStyleRegistry';
import { Footer, Header } from 'components/shared';
import { GlobalStyle, theme } from 'styles';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<head lang="ko" />
			<body>
				<Provider>
					<QueryProvider>
						<StyledComponentsRegistry>
							<ThemeProvider theme={theme}>
								<GlobalStyle />
								<div id="modal-portal" />
								<Header />
								<ChildrenContainer>{children}</ChildrenContainer>
								<Footer />
							</ThemeProvider>
						</StyledComponentsRegistry>
					</QueryProvider>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;

const ChildrenContainer = styled.main`
	position: relative;
	min-height: calc(100vh - 258px);
	margin-top: 78px;
`;
