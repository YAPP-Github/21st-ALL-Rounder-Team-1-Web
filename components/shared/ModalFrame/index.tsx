import { PropsWithChildren } from 'react';
import ModalPortal from 'components/shared/ModalFrame/ModalPortal';
import * as S from './styled';

const ModalFrame = (props: PropsWithChildren) => {
	return (
		<ModalPortal>
			<S.Container
				style={{
					position: 'fixed',
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100vw',
					height: '100vh',
					background: 'rgba(28, 28, 30, 0.5)',
					zIndex: 9999,
				}}
			>
				<S.ContentWrapper
					style={{ height: 'auto', padding: '40px 32px', borderRadius: '16px', backgroundColor: '#ffffff', textAlign: 'center' }}
				>
					{props.children}
				</S.ContentWrapper>
			</S.Container>
		</ModalPortal>
	);
};

export default ModalFrame;
