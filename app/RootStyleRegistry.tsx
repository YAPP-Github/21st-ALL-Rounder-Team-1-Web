import { useServerInsertedHTML } from 'next/navigation';
import { useStyledComponentsRegistry } from 'lib/styled-components';

const RootStyleRegistry = ({ children }: { children: React.ReactNode }) => {
	const [StyledComponentsRegistry, styledComponentsFlushEffect] = useStyledComponentsRegistry();

	useServerInsertedHTML(() => {
		return <>{styledComponentsFlushEffect()}</>;
	});

	return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default RootStyleRegistry;
