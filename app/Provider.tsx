import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import ReactQuery from 'app/ReactQuery';

interface Props {
	children: React.ReactNode;
}

const QueryProvider = (props: Props) => {
	const queryClient = new QueryClient();

	const provider = <ReactQuery dehydratedState={dehydrate(queryClient)}>{props.children}</ReactQuery>;

	queryClient.clear();

	return provider;
};

export default QueryProvider;
