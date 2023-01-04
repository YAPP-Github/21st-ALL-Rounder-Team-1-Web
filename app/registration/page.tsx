'use client';
import { Tab } from 'components/feature';
import { LargeBtn } from 'components/shared';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Router from 'next/router';
import style from 'styles/style';

const Registration = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div>{children}</div>
		</>
	);
};

export default Registration;
