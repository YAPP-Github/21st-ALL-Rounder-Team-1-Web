import * as S from './styled';
import { Typography } from 'components/shared';

type Props = {
	sectionTitle: string;
	sectionDescription?: string[];
};

const MyPageSectionIntroduce = (props: Props) => {
	const { sectionTitle, sectionDescription } = props;

	return (
		<>
			<Typography variant="h2" aggressive="headline_oneline_003" margin="84px 0 20px 0">
				{sectionTitle}
			</Typography>
			<S.SectionDescriptionWrapper>
				{sectionDescription?.map((sectionDescription, index) => {
					return <S.SectionDescription key={index}>{sectionDescription}</S.SectionDescription>;
				})}
			</S.SectionDescriptionWrapper>
		</>
	);
};

export default MyPageSectionIntroduce;
