import { useRef, useState } from 'react';
import * as S from './styled';
import { Typography } from 'components/shared';
import { BottomIcon, TopIcon } from 'public/static/icons';

type Props = {
	dropdownElements: Array<[number, string]>; // [index로 쓰일 number,요소 value값]
};
const DropDownList = ({ dropdownElements }: Props) => {
	const focusRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentSelectedElementIndex, setCurrentSelectedElementIndex] = useState<number>(0); // 지금 선택된 항목
	const handleCurrentSelectedElementIndex = (idx: number) => {
		if (isOpen && focusRef.current !== null) focusRef.current.blur();
		setCurrentSelectedElementIndex(() => idx);
		setIsOpen((isOpen) => !isOpen);
	};
	const handleIsOpen = () => {
		if (isOpen && focusRef.current !== null) focusRef.current.blur();
		else if (!isOpen && focusRef.current !== null) focusRef.current.focus();
		setIsOpen((isOpen) => !isOpen);
	};
	return (
		<S.DropDownContainer>
			<S.DropDownClosed ref={focusRef} onClick={handleIsOpen}>
				<Typography variant="h2" aggressive="button_001">
					{dropdownElements[currentSelectedElementIndex][1]}
					{!isOpen ? <BottomIcon /> : <TopIcon />}
				</Typography>
			</S.DropDownClosed>
			<S.DownContainer isOpen={isOpen}>
				{dropdownElements.map((item: [number, string]) => {
					return (
						item[0] !== currentSelectedElementIndex && (
							<S.DownSection key={`${item[1]}`} onClick={() => handleCurrentSelectedElementIndex(item[0])}>
								<Typography variant="span" aggressive="button_001">
									{item[1]}
								</Typography>
							</S.DownSection>
						)
					);
				})}
			</S.DownContainer>
		</S.DropDownContainer>
	);
};
export default DropDownList;
