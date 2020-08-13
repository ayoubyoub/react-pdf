// Get Containers
import { Header } from "../../header";
import { InfoFiche } from "./infoFiche";
import { Notation } from "./notation";
import { Taux } from "./taux";
// Call Styles
import { FonctionnementMain, Divider } from "../../../assets/css/normalize-css";
// Fonctionnement Content
const Fonctionnement = () => (
  <FonctionnementMain>
    <Header />
		<Divider marginTop="75" />
    <InfoFiche />
		<Divider marginTop="250" />
		<Notation />
		<Taux />
  </FonctionnementMain>
);
// Export Fonctionnement
export default Fonctionnement;
