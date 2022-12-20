import styled from 'styled-components';

export const SmallBtnContainer = styled.button<{ width: number }>`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: 48px;
	border-radius: 10px;
	border: 1px solid #e5e5ea; //스타일 세팅 되면 바꾸기
	padding: 15px 24px;
	//스타일 세팅 되면 바꾸기
	&:hover {
		background-color: #f9f9fb;
	}
	& > span {
		//이 아래는 스타일 세팅 되면 바꾸기
		//color: #000;
		//font:
	}
`;
export const LargeBtnContainer = styled.button<{ width: number; background: string }>`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: 48px;
	border-radius: 10px;
	border: 1px solid #e5e5ea; //스타일 세팅 되면 바꾸기
	// 스타일 세팅 되면 바꾸기
	//background-color:
	//color:
	//border -> background에 따라서 유무 나눠주기
	& > span {
		//이 아래는 스타일 세팅 되면 바꾸기
		//color: #000;
		//font:
	}
`;
