import * as S from './styled';

type Props = {
	formFlag?: boolean;
	inputFlag: 'normal' | 'success' | 'error';
	emptyErrorMessage?: string;
	formErrorMessage?: string;
} & React.ComponentProps<'input'>;

const TextField = ({ inputFlag, emptyErrorMessage, formErrorMessage, formFlag, ...props }: Props) => {
	return (
		<S.TextFieldContainer>
			<S.StyledTextFiled
				formFlag={formFlag}
				readOnly={props.readOnly ?? false}
				name={props.name}
				id={props.id}
				onKeyDown={props.onKeyDown}
				onFocus={props.onFocus}
				inputFlag={inputFlag}
				onChange={props.onChange}
				onMouseDown={props.onMouseDown}
				style={{ width: props.width }}
				value={props.value}
				defaultValue={props.defaultValue}
				placeholder={props.placeholder ?? '입력해주세요'}
				type="search"
			/>
			{inputFlag === 'error' && <S.StyledMessage>{emptyErrorMessage}</S.StyledMessage>}
			{inputFlag !== 'error' && formFlag === true && <S.StyledMessage>{formErrorMessage}</S.StyledMessage>}
		</S.TextFieldContainer>
	);
};
export default TextField;
