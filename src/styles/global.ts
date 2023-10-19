import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* HTML5 display-role reset for older browsers */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
	-webkit-user-select:none;
  	-moz-user-select:none;
  	-ms-user-select:none;
  	user-select:none;

}
:root {
      --toastify-toast-width: max-content;
  }


.Toastify__toast-container {
	padding : 0;
}


.Toastify__toast {
	transition: none;
	width: var(--toastify-toast-width);
	min-width: 304px;
	padding: 16px 32px 16px 24px;
	flex-direction: column;
	align-items: center;
	gap: 35px;
	border-radius: 8px;
	display: inline-flex;
	margin: 0;
	height: 78px;
}



* {
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


`;

export default GlobalStyle;
