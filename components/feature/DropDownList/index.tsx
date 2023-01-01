'use client';
import { Typography } from 'components/shared';
import { BottomIcon } from 'public/static/icons';
import { useRef, useState } from 'react';
import { DropDownContainer, DropDownClosed, DownSection, DownContainer } from './styled';

type Props = {
	dropdownElements: string[];
};
const DropDownList = ({ dropdownElements }: Props) => {
	const focusRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedElement, setSelectedElement] = useState<number>(0); // 지금 선택된 항목
	const handleSelectedElement = (idx: number) => {
		if (isOpen && focusRef.current !== null) focusRef.current.blur();
		setSelectedElement(() => idx);
		setIsOpen((isOpen) => !isOpen);
	};
	const handleIsOpen = () => {
		if (isOpen && focusRef.current !== null) focusRef.current.blur();
		else if (!isOpen && focusRef.current !== null) focusRef.current.focus();
		setIsOpen((isOpen) => !isOpen);
	};
	return (
		<DropDownContainer>
			<DropDownClosed ref={focusRef} onClick={handleIsOpen}>
				<Typography variant="h2" aggressive="button_001">
					{dropdownElements[selectedElement]}
					<BottomIcon />
				</Typography>
			</DropDownClosed>
			<DownContainer isOpen={isOpen}>
				{dropdownElements.map((elementValue: string, idx: number) => {
					return (
						idx !== selectedElement && (
							<DownSection key={`${idx}${elementValue}`} onClick={() => handleSelectedElement(idx)}>
								<Typography variant="span" aggressive="button_001">
									{elementValue}
								</Typography>
							</DownSection>
						)
					);
				})}
			</DownContainer>
		</DropDownContainer>
	);
};
export default DropDownList;
