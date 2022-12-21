import * as styled from 'styled-components';
import normalize from 'styled-normalize';

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
`;

export default GlobalStyle;