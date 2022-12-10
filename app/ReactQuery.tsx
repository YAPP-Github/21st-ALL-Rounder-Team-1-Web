import { QueryClient, DehydratedState, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import React, { useState } from 'react';

interface Props {
	dehydratedState: DehydratedState;
	children: React.ReactNode;
}

const ReactQuery = (props: Props) => {
	const [queryClient] = useState(new QueryClient());

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={props.dehydratedState}>{props.children}</Hydrate>
			</QueryClientProvider>
		</>
	);
};

export default ReactQuery;
