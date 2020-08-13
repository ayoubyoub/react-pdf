// Call Styles
import main from "../../assets/css/main-css";
// Call labels
import labels from "../labels/labels.json";
// Header Content
export const Header = ({ data }) => (
  <main.HeaderMain>
    <main.Company>
      <main.CompanyLogo />
      <main.CompanyInfo>{labels.company}</main.CompanyInfo>
    </main.Company>
    <main.MainInfo>
      <main.Container padding="3">
        <main.Title>{labels.banque}</main.Title>
        <main.Text>{data.banque}</main.Text>
      </main.Container>
      <main.Container padding="3" width="40">
        <main.Title>{labels.succursale}</main.Title>
        <main.Text>{data.succursale}</main.Text>
      </main.Container>
      <main.Container padding="3" width="48">
        <main.Title>{labels.agence}</main.Title>
        <main.Text>{data.agence}</main.Text>
      </main.Container>
    </main.MainInfo>
  </main.HeaderMain>
);
