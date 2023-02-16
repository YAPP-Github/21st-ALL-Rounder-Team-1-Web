'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PumpLogoRoundImg } from 'public/static/images';
import styles from 'styles/404.module.css';

const Error = () => {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Image src={PumpLogoRoundImg} alt="round pump logo" width={100} height={100} style={{ marginBottom: '34px' }} />

			<h2 className={styles.title}>페이지를 찾을 수 없습니다</h2>
			<p className={styles.description}>
				페이지의 주소가 잘못 입력되었거나,
				<br />
				변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
				<br />
				입력하신 페이지 주소를 다시 한번 확인해주세요.
			</p>
			<div className={styles.buttonContainer}>
				<button className={styles.routeHome} type="button" onClick={() => router.push('/')}>
					<span>펌프 홈</span>
				</button>
				<button className={styles.routeBack} type="button" onClick={() => router.back()}>
					<span>이전 페이지</span>
				</button>
			</div>
		</div>
	);
};

export default Error;
