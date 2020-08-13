// Get Containers
import { Header as HeaderFonctionnement } from "../../header";
import { InfoFiche as InfoFicheFonctionnement } from "./infoFiche";
import { Notation as NotationFonctionnement } from "./notation";
import { Taux } from "./taux";
// Call Styles
import { FonctionnementMain, Divider } from "../../../assets/css/normalize-css";
// Fonctionnement Content
const Fonctionnement = () => (
  <FonctionnementMain>
    <HeaderFonctionnement />
    <Divider marginTop="75" />
    <InfoFicheFonctionnement />
    <Divider marginTop="250" />
    <NotationFonctionnement />
    <Taux />
  </FonctionnementMain>
);
// Export Fonctionnement
export default Fonctionnement;
