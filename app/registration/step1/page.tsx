'use client';

import { TextField } from 'components/feature';
import { StyledLayout, Typography } from 'components/shared';
import { ChangeEvent } from 'react';
import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	return (
		<>
			<StyledLayout.TextFieldSection>
				<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
					대표자명
				</Typography>
				<TextField
					name="대표자명"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					onChange={function (event: ChangeEvent<HTMLInputElement>): void {
						throw new Error('Function not implemented.');
					}}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
					이메일
				</Typography>
				<TextField
					name="이메일"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					onChange={function (event: ChangeEvent<HTMLInputElement>): void {
						throw new Error('Function not implemented.');
					}}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
					전화번호
				</Typography>
				<TextField
					name="전화번호"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					onChange={function (event: ChangeEvent<HTMLInputElement>): void {
						throw new Error('Function not implemented.');
					}}
				/>
			</StyledLayout.TextFieldSection>
		</>
	);
};

export default Step1;
