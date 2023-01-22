import * as S from './styled';

type Props = {
	inputFlag: 'normal' | 'success' | 'error';
	emptyErrorMessage?: string;
} & React.ComponentProps<'input'>;

const TextField = ({ inputFlag, emptyErrorMessage, ...props }: Props) => {
	return (
		<S.TextFieldContainer>
			<S.StyledTextFiled
				readOnly={props.readOnly ?? false}
				name={props.name}
				id={props.id}
				onFocus={props.onFocus}
				inputFlag={inputFlag}
				onChange={props.onChange}
				onMouseDown={props.onMouseDown}
				style={{ width: props.width }}
				value={props.value}
				placeholder={props.placeholder ?? '입력해주세요'}
				type="search"
			/>
			{inputFlag === 'error' && <S.StyledMessage>{`${emptyErrorMessage} 입력해주세요`}</S.StyledMessage>}
		</S.TextFieldContainer>
	);
};
export default TextField;
