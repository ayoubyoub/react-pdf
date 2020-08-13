// Get Containers
import { Header as HeaderFonctionnement } from "../../header";
import { InfoFiche as InfoFicheFonctionnement } from "./infoFiche";
import { Notation as NotationFonctionnement } from "./notation";
import { Taux as TauxFonctionnement } from "./taux";
// Call Styles
import main from "../../../assets/css/main-css";
// Fonctionnement Content
const Fonctionnement = () => (
  <main.FonctionnementMain>
    <HeaderFonctionnement />
    <main.Divider marginTop="75" />
    <InfoFicheFonctionnement />
    <main.Divider marginTop="250" />
    <NotationFonctionnement />
    <TauxFonctionnement />
  </main.FonctionnementMain>
);
// Export Fonctionnement
export default Fonctionnement;
