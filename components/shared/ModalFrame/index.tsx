import { PropsWithChildren } from 'react';
import ModalPortal from 'components/shared/ModalFrame/ModalPortal';
import * as S from './styled';

const ModalFrame = (props: PropsWithChildren) => {
	return (
		<ModalPortal>
			<>
				<S.ModalBackdrop />
				<S.Container>
					<S.ContentWrapper
						style={{
							height: 'auto',
							padding: '40px 32px',
							borderRadius: '16px',
							backgroundColor: '#ffffff',
							textAlign: 'center',
						}}
					>
						{props.children}
					</S.ContentWrapper>
				</S.Container>
			</>
		</ModalPortal>
	);
};

export default ModalFrame;
