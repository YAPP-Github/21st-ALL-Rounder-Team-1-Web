export const isIncludedURLPattern = (currentPathname: string, patternRegExp: RegExp[]) => {
	return patternRegExp.some((pattern) => pattern.test(currentPathname));
};
