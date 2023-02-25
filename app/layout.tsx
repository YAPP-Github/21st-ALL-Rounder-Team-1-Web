'use client';

import QueryProvider from 'app/Provider';
import { Footer, Header } from 'components/shared';
import { Provider } from 'jotai';
import ProtectedRouteWithAuthContainer from 'pageComponents/app/ProtectedRouteWithAuthContainer';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import StyledComponentsRegistry from './RootStyleRegistry';

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

								<ProtectedRouteWithAuthContainer>
									<Header />
									<ChildrenContainer>{children}</ChildrenContainer>
									<Footer />
								</ProtectedRouteWithAuthContainer>
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
