'use client';

import { TextField } from 'components/feature';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import { ChangeEvent, FormEvent, useState } from 'react';
import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	const [inputs, setInputs] = useState({
		managerName: '',
		managerEmail: '',
		managerPhonenumber: '',
	});
	const { managerName, managerEmail, managerPhonenumber } = inputs;
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	const handleOnClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={handleOnClick}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerName">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						대표자명
					</Typography>
				</label>
				<TextField
					name="managerName"
					flag="normal"
					width={style.textFieldWidth.textField_width_320}
					onChange={handleOnChange}
					value={managerName}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerEmail">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						이메일
					</Typography>
				</label>
				<TextField
					name="managerEmail"
					flag="normal"
					value={managerEmail}
					width={style.textFieldWidth.textField_width_320}
					onChange={handleOnChange}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerPhonenumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						전화번호
					</Typography>
				</label>
				<TextField
					name="managerPhonenumber"
					flag="normal"
					value={managerPhonenumber}
					width={style.textFieldWidth.textField_width_320}
					onChange={handleOnChange}
				/>
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
