import styled from "@emotion/styled";

import { BanqueInfo } from "./banque";
import { SuccursaleInfo } from "./succursale";
import { AgenceInfo } from "./agence";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  right: -50,
  top: 0,
  left: 0,
}));

const Info = styled("div")(({ theme }) => ({
  display: "flex",
	alignItems: "flex-start",
	alignContent: "flex-end",
	alignSelf: "flex-start",
	justifyContent: "flex-end",
}));

const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexGrow: 1,
  padding: "5px",
}));

const Logo = styled("img")(({ theme }) => ({
  width: theme.width[16],
  height: theme.height[16],
}));

const CompanyInfo = styled("p")(({ theme }) => ({
	fontSize: "14px",
  letterSpacing: "1px",
  fontWeight: "800",
  color: "#883744",
  width: theme.width[160],
  marginLeft: "5px",
}));

export const Header = ({ children }) => (
  <Container>
    <LogoWrapper>
      <Logo src="https://i.ibb.co/pRZpGnv/image.png" alt="logo" />
      <CompanyInfo>BANQUE POPULAIRE</CompanyInfo>
    </LogoWrapper>
    <Info>
      <BanqueInfo />
      <SuccursaleInfo />
      <AgenceInfo />
    </Info>
  </Container>
);
