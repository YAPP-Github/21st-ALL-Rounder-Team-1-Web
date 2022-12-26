import * as styled from 'styled-components';
import normalize from 'styled-normalize';
import theme from 'styles/theme';

const GlobalStyle = styled.createGlobalStyle`
	${normalize};

	*,
	*:after,
	*:before {
		box-sizing: border-box;
		font-size: 62.5%; // 10px -> 1rem
	}

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 10px;
		font: inherit;
		vertical-align: baseline;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}

	* {
		font-family: 'Sans-serif';
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}
	ul,
	ol,
	li {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	&::-webkit-scrollbar-track {
		height: auto;
	}
	&::-webkit-scrollbar-thumb {
		height: 10rem;
		border-radius: 1.6rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	input,
	button {
		padding: 0;
		border: none;
		background-color: transparent;
		outline: none;
		cursor: pointer;
	}

	input {
		-webkit-appearance: none; /* Safari and Chrome */
		-moz-appearance: none; /* Firefox */
		appearance: none;
		&:focus {
			outline: none;
		}
	}
	textarea {
		border: none;
		background-color: transparent;
		resize: none;
		outline: none;
	}
	input:focus::-webkit-input-placeholder,
	textarea:focus::-webkit-input-placeholder {
		/* WebKit browsers */
		color: transparent;
	}
	input:focus:-moz-placeholder,
	textarea:focus:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		color: transparent;
	}
	input:focus::-moz-placeholder,
	textarea:focus::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		color: transparent;
	}
	input:focus:-ms-input-placeholder,
	textarea:focus:-ms-input-placeholder {
		/* Internet Explorer 10+ */
		color: transparent;
	}

	// Web Accessibility Styles - IR
	.visually-hidden {
		position: absolute !important;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: 0;
		border: 0;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
		clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
		clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
		white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
	}

	.modal-title {
		padding-bottom: 8px;
		font: ${theme.fonts.headline_003};
	}

	.modal-description {
		font: ${theme.fonts.body_oneline_002};
	}

	.modal-btn-single-wrapper {
		max-height: 50px;
		margin-top: 32px;

		& > :nth-of-type(1) {
			flex: 1;
			width: 200px;
			margin: 0 auto;
		}
	}

	.modal-primary-btn-single-wrapper {
		max-height: 50px;
		margin-top: 40px;

		& > :nth-of-type(1) {
			flex: 1;
			width: 200px;
			margin: 0 auto;
		}
	}

	.modal-btn-multi-wrapper {
		display: flex;
		gap: 8px;
		max-height: 50px;
		margin-top: 32px;

		& > :nth-of-type(1) {
			flex: 1;
			width: 200px;
		}

		& > :nth-of-type(2) {
			flex: 1;
			width: 200px;
		}
	}

	.modal-social-title {
		padding-bottom: 16px;
		font: ${theme.fonts.headline_002};
	}

	.modal-social-btn-wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 400px;
		height: 130px;
		margin-top: 68px;

		& > :nth-of-type(1) {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 60px;
			border-radius: 10px;
			background: #06bd34;
			font: ${theme.fonts.button_001};
			color: #ffffff;
		}

		& > :nth-of-type(2) {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 60px;
			border-radius: 10px;
			background: #fbe54d;
			font: ${theme.fonts.button_001};
			color: #351d1c;
		}
	}
`;

export default GlobalStyle;
