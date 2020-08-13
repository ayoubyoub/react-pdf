// Call Styled Lib
import { css } from "@emotion/core";
// Normalize CSS APP
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
// Export Normlize Main CSS
export default normalizeCSS;
