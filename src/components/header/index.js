// Call Styles
import main from "../../assets/css/main-css";
// Header Content
export const Header = () => (
  <main.HeaderMain>
    <main.Company>
      <main.CompanyLogo />
      <main.CompanyInfo>BANQUE POPULAIRE</main.CompanyInfo>
    </main.Company>
    <main.MainInfo>
      <main.Container padding="3">
        <main.Title>BANQUE</main.Title>
        <main.Text>78</main.Text>
      </main.Container>
      <main.Container padding="3" width="40">
        <main.Title>SUCCURSALE</main.Title>
        <main.Text>626</main.Text>
      </main.Container>
      <main.Container padding="3" width="48">
        <main.Title>AGENCE</main.Title>
        <main.Text>7863</main.Text>
      </main.Container>
    </main.MainInfo>
  </main.HeaderMain>
);
