import styled, { keyframes } from 'styled-components';

type Props = {
	duration: number; // second
};

const toastShowAndHideSlide = keyframes`
  0% {
    transform: translate3d(-50%, 0, 0);
  }

  50% {
    transform: translate3d(-50%, 126px, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Container = styled.div<Props>`
	position: fixed;
	top: 0px;
	left: 50%;
	display: flex;
	align-items: center;
	width: 360px;
	height: 48px;
	padding: 8px 16px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.gray_006};
	font: ${({ theme }) => theme.fonts.button_001};
	color: ${({ theme }) => theme.colors.white};
	transform: translate3d(-50%, 0, 0);
	animation: ${toastShowAndHideSlide} ${({ duration }) => (duration ? `${duration}s` : `1s`)} ease-in 1 alternate;
	z-index: 50;
`;
