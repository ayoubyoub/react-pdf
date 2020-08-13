import { css } from "@emotion/core";

const normalizeCSS = () => css`
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans");
	html,
	body {
		margin: 0;
		font-family: "Open Sans";
		overflow: hidden;
		-webkit-print-color-adjust: exact;
	}
	* {
		boxsizing: "border-box";
	}
`;

export default normalizeCSS;
