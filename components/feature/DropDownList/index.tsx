import { Typography } from 'components/shared';
import { useState } from 'react';
import { DropDownContainer, Bottom, DropDownClosed, DownSection } from './styled';

type Props = {
	isOpen: boolean;
};
const DropDownList = ({ ...props }: Props) => {
	const [isOpen, setIsOpen] = useState(props.isOpen);
	return (
		<DropDownContainer>
			<DropDownClosed isOpen={isOpen}>
				<Typography variant="span" aggressive="button_001">
					g당
				</Typography>
				<Bottom style={{ width: `${7.1}px`, height: `${12.05}px` }} />
			</DropDownClosed>
			<DownSection></DownSection>
		</DropDownContainer>
	);
};
export default DropDownList;
