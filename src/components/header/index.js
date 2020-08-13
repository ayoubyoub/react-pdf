// Get Containers
import { BanqueInfo } from "./banque";
import { SuccursaleInfo } from "./succursale";
import { AgenceInfo } from "./agence";
// Call Styles
import { HeaderMain, Company, CompanyLogo, CompanyInfo, MainInfo } from "../../assets/css/normalize-css";
// Header Content
export const Header = ({ children }) => (
  <HeaderMain>
    <Company>
      <CompanyLogo src="https://i.ibb.co/pRZpGnv/image.png" alt="logo" />
      <CompanyInfo>BANQUE POPULAIRE</CompanyInfo>
    </Company>
    <MainInfo>
      <BanqueInfo />
      <SuccursaleInfo />
      <AgenceInfo />
    </MainInfo>
  </HeaderMain>
);
