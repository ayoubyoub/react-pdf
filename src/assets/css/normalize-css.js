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

// Fonctionnement Fiche
export const FicheContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 86,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 20,
}));

export const FicheContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
  paddingBottom: 22,
}));

export const FicheHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

export const FicheVertical = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const FicheBox = styled("div")(({ theme }) => ({
  margin: "5px 40px 0 0",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: 350,
}));

export const FicheTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 14,
}));

// Fonctionnement Notation
export const NotationContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 270,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

export const NotationTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 25,
  marginLeft: 21,
}));

export const NotationContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
}));

export const NotationHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: theme.width.full,
}));

export const NotationVertical = styled("div")(
  ({ theme, title, border, left, bottom, right }) => ({
    display: "flex",
    flexDirection: "column",
    border: border ? "1px solid transparent" : "1px solid #979797",
    borderLeft: left ? "1px solid transparent" : "1px solid #979797",
    borderBottom: bottom ? "1px solid transparent" : "1px solid #979797",
    borderRight: right ? "1px solid #979797" : "1px solid #979797",
    width: theme.width.full,
    backgroundColor: title ? "#f6f6f6" : "",
  })
);

export const NotationBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  width: theme.width.full,
  height: 40,
}));

export const NotationTitle = styled("p")(({ theme, normal }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: normal ? "flex-start" : "center",
  marginLeft: normal ? 20 : 0,
  fontSize: "11px",
  color: "#4a4a4a",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  width: theme.width.full,
  height: 40,
}));

export const NotationText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

// Fonctionnement Taux
export const TauxContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 500,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

export const TauxTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 25,
  marginLeft: 21,
}));

export const TauxContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
}));

export const TauxHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: theme.width.full,
}));

export const TauxVertical = styled("div")(
  ({ theme, title, border, left, bottom, right, extra }) => ({
    display: "flex",
    flexDirection: "column",
    border: border ? "1px solid transparent" : "1px solid #979797",
    borderLeft: left ? "1px solid transparent" : "1px solid #979797",
    borderBottom: bottom ? "1px solid transparent" : "1px solid #979797",
    borderRight: right ? "1px solid #979797" : "1px solid #979797",
    width: extra ? theme.width.full : 500,
    backgroundColor: title ? "#f6f6f6" : "",
  })
);

export const TauxBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  width: theme.width.full,
  height: 40,
}));

export const TauxTitle = styled("p")(({ theme, normal }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: normal ? "flex-start" : "center",
  marginLeft: normal ? 20 : 0,
  fontSize: "11px",
  color: "#4a4a4a",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  width: theme.width.full,
  height: 40,
}));

export const TauxText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

// Export Normlize Main CSS
export default normalizeCSS;
