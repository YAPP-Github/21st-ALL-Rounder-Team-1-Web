import * as S from './styled';

type Props = {
	open: boolean;
	duration: number; // ms
};

const Toast = (props: Props) => {
	return <S.Container duration={props.duration}>✓ 임시저장이 완료되었습니다.</S.Container>;
};

export default Toast;
