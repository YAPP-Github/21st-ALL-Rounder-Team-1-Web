import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DEFAULT_WARNING_MESSAGE = `사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.`;

const useRouteChangeAndRefreshDetect = ({
	refreshRedirectRoutePath,
	popStateCancelRoutePath,
	popStateSuccessRoutePath,
}: {
	refreshRedirectRoutePath: string;
	popStateCancelRoutePath: string;
	popStateSuccessRoutePath: string;
}) => {
	const router = useRouter();

	const handleWindowBeforeUnload = useCallback(
		(event: BeforeUnloadEvent) => {
			event.preventDefault();
			event.returnValue = DEFAULT_WARNING_MESSAGE;
			return DEFAULT_WARNING_MESSAGE;
		},
		[refreshRedirectRoutePath, popStateCancelRoutePath, popStateSuccessRoutePath],
	);

	const handleWindowPopState = useCallback(
		(event: PopStateEvent) => {
			event.preventDefault();

			if (confirm(DEFAULT_WARNING_MESSAGE)) {
				router.push(popStateSuccessRoutePath);
			} else {
				router.push(popStateCancelRoutePath);
			}
		},
		[refreshRedirectRoutePath, popStateCancelRoutePath, popStateSuccessRoutePath],
	);

	const handleRefreshInSamePathname = useCallback(() => {
		const performanceNavigation: any = window.performance.getEntriesByType('navigation')[0];
		if (performanceNavigation.type === 'reload') {
			router.push(refreshRedirectRoutePath);
		}
	}, [refreshRedirectRoutePath, popStateCancelRoutePath, popStateSuccessRoutePath]);

	if (typeof window !== 'undefined') {
		handleRefreshInSamePathname();
	}

	useEffect(() => {
		window.addEventListener('beforeunload', handleWindowBeforeUnload, { capture: true });
		window.addEventListener('popstate', handleWindowPopState);

		return () => {
			window.removeEventListener('beforeunload', handleWindowBeforeUnload, { capture: true });
			window.removeEventListener('popstate', handleWindowPopState);
		};
	}, [typeof window !== 'undefined']);
};

export default useRouteChangeAndRefreshDetect;
