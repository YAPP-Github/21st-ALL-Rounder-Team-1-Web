'use client';

import { TextField } from 'components/feature';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import { FormEvent } from 'react';
import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerName">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						대표자명
					</Typography>
				</label>
				<TextField id="managerName" name="step1" flag="normal" width="320px" />
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerEmail">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						이메일
					</Typography>
				</label>
				<TextField id="managerEmail" name="step1" flag="normal" width="320px" />
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerPhonenumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						전화번호
					</Typography>
				</label>
				<TextField id="managerPhonenumber" name="step1" flag="normal" width="320px" />
			</StyledLayout.TextFieldSection>
			<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
				<LargeBtn style={style.btnStyle.primary_btn_002} type="submit">
					다음단계
				</LargeBtn>
			</StyledLayout.FlexBox>
		</form>
	);
};

export default Step1;
