// Get Containers
import { BanqueInfo } from "./banque";
import { SuccursaleInfo } from "./succursale";
import { AgenceInfo } from "./agence";
// Call Styles
import main from "../../assets/css/main-css";
// Header Content
export const Header = ({ children }) => (
  <main.HeaderMain>
    <main.Company>
      <main.CompanyLogo src="https://i.ibb.co/pRZpGnv/image.png" alt="logo" />
      <main.CompanyInfo>BANQUE POPULAIRE</main.CompanyInfo>
    </main.Company>
    <main.MainInfo>
      <BanqueInfo />
      <SuccursaleInfo />
      <AgenceInfo />
    </main.MainInfo>
  </main.HeaderMain>
);
