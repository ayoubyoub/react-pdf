// Call Styled Lib
import { css } from "@emotion/core";
import styled from "@emotion/styled";
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
// Main Styles
export const Container = styled("div")(({ theme, padding, width }) => ({
  padding: theme.padding[padding],
  width: theme.width[width],
}));
// Default Title
export const Title = styled("p")(({ theme }) => ({
  fontSize: "11px",
  color: "#4a4a4a",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: "0px",
}));
// Default Text
export const Text = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: "0px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));
// Header Styles
export const HeaderMain = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  right: -50,
  top: 0,
  left: 0,
}));

export const MainInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  alignContent: "flex-end",
  alignSelf: "flex-start",
  justifyContent: "flex-end",
}));

export const Company = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexGrow: 1,
  padding: "5px",
}));

export const CompanyLogo = styled("img")(({ theme }) => ({
  width: theme.width[16],
  height: theme.height[16],
}));

export const CompanyInfo = styled("p")(({ theme }) => ({
  fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: "800",
  color: "#883744",
  width: theme.width[160],
  marginLeft: "5px",
}));

// Footer Styles
export const FooterMain = styled("footer")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
}));

export const FooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: 2,
}));

export const FooterInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const FooterPage = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
}));

// Fonctionnement Styles
export const FonctionnementMain = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.padding[10],
  backgroundColor: theme.colors.white,
}));

export const Divider = styled("div")(({ theme, marginTop }) => ({
  borderTop: "1px solid #979797",
  marginTop: parseInt(marginTop),
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));
// Export Normlize Main CSS
export default normalizeCSS;
