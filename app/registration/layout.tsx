'use client';
import { Tab } from 'components/feature';
import { LargeBtn } from 'components/shared';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Router from 'next/router';
import style from 'styles/style';

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const pathname = usePathname();
	const handleClick = () => {
		if (pathname === '/registration') router.push('/registration/step1');
		else if (pathname === '/registration/step1') router.push('/registration/step2');
		else if (pathname === '/registration/step2') router.push('/registration/step3');
	};

	return (
		<>
			<LargeBtn style={style.btnStyle.blue_btn_002} onClick={handleClick}>
				버튼
			</LargeBtn>

			<Tab />
			<div>{children}</div>
		</>
	);
};

export default RegistrationLayout;
