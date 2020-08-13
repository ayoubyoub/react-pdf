// Call Styled Lib
import styled from "@emotion/styled";
// Url server
const url = 'http://localhost:3000';
// Main Styles
const Container = styled("div")(({ theme, padding, width }) => ({
  padding: theme.padding[padding],
  width: theme.width[width],
}));
// Default Title
const Title = styled("p")(({ theme }) => ({
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
const Text = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: "0px",
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));
// Header Styles
const HeaderMain = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  right: -50,
  top: 0,
  left: 0,
}));
const MainInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  alignContent: "flex-end",
  alignSelf: "flex-start",
  justifyContent: "flex-end",
}));
const Company = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexGrow: 1,
  padding: "5px",
}));
const CompanyLogo = styled("div")(({ theme }) => ({
	backgroundImage: `url('${url}/logo.png')`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain',
		height: '60px',
		width: '60px',
}));
const CompanyInfo = styled("p")(({ theme }) => ({
  fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: "700",
  color: "#883744",
  width: theme.width[160],
  marginLeft: "5px",
}));
// Footer Styles
const FooterMain = styled("footer")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
}));
const FooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: 2,
}));
const FooterInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
const FooterPage = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
}));
const FooterText = styled("p")(({ bold }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: "0px",
  fontWeight: bold ? "700" : "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: ".3px",
}));
// Fonctionnement Styles
const FonctionnementMain = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.padding[10],
  backgroundColor: theme.colors.white,
}));
const Divider = styled("div")(({ theme, marginTop }) => ({
  borderTop: "1px solid #979797",
  marginTop: parseInt(marginTop),
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));
// Fonctionnement Fiche
const FicheContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 86,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 20,
}));
const FicheContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
  paddingBottom: 22,
}));
const FicheHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));
const FicheVertical = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));
const FicheBox = styled("div")(({ theme }) => ({
  margin: "5px 40px 0 0",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: 350,
}));
const FicheTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 14,
}));
// Fonctionnement Notation
const NotationContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 270,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));
const NotationTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 25,
  marginLeft: 21,
}));
const NotationContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
}));
const NotationHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: theme.width.full,
}));
const NotationVertical = styled("div")(
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
const NotationBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  width: theme.width.full,
  height: 40,
}));
const NotationTitle = styled("p")(({ theme, normal }) => ({
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
const NotationText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));
// Fonctionnement Taux
const TauxContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 500,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));
const TauxTitre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
  marginBottom: 25,
  marginLeft: 21,
}));
const TauxContainerMain = styled("div")(({ theme }) => ({
  width: theme.width.full,
}));
const TauxHorizontal = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: theme.width.full,
}));
const TauxVertical = styled("div")(
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
const TauxBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  width: theme.width.full,
  height: 40,
}));
const TauxTitle = styled("p")(({ theme, normal }) => ({
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
const TauxText = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontWeight: "700",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));
// Export Styles
export default {
  Container,
  Title,
  Text,
  HeaderMain,
  MainInfo,
  Company,
  CompanyLogo,
  CompanyInfo,
  FooterMain,
  FooterContent,
  FooterInfo,
	FooterPage,
	FooterText,
  FonctionnementMain,
  Divider,
  FicheContainer,
  FicheContainerMain,
  FicheHorizontal,
  FicheVertical,
  FicheBox,
  FicheTitre,
  NotationContainer,
  NotationTitre,
  NotationContainerMain,
  NotationHorizontal,
  NotationVertical,
  NotationBox,
  NotationTitle,
  NotationText,
  TauxContainer,
  TauxTitre,
  TauxContainerMain,
  TauxHorizontal,
  TauxVertical,
  TauxBox,
  TauxTitle,
  TauxText,
};
