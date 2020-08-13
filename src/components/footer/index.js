// Call Styles
import main from "../../assets/css/main-css";
// Call labels
import labels from "../labels/labels.json";
// Footer Content
export const Footer = ({ data }) => (
  <main.FooterMain>
    <main.FooterInfo>
      <main.FooterText>{labels.footerFonctionnement}</main.FooterText>
      <main.FooterContent>
        <main.Title>{labels.refDossier}</main.Title>
        <main.FooterText bold="true">{data.refDossier} :</main.FooterText>
      </main.FooterContent>
    </main.FooterInfo>
    <main.FooterPage>
      {/* TOTO: Algo nombre pages PDF */}
      <main.FooterText bold="true">{labels.pages}</main.FooterText>
    </main.FooterPage>
  </main.FooterMain>
);
