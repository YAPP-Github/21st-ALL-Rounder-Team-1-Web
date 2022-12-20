import { SmallBtnContainer } from './styled';

interface Props {
	width: number;
	btnText: string;
}
const ResistSmallBtn = (props: Props) => {
	return (
		<SmallBtnContainer width={props.width}>
			<span>{props.btnText}</span>
		</SmallBtnContainer>
	);
};
export default ResistSmallBtn;
