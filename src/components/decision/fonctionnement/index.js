// Get Containers
import { Header as HeaderFonctionnement } from "../../header";
import { InfoFiche as InfoFicheFonctionnement } from "./infoFiche";
import { Notation as NotationFonctionnement } from "./notation";
import { Taux as TauxFonctionnement } from "./taux";
// Call Styles
import main from "../../../assets/css/main-css";
// Fonctionnement Content
const Fonctionnement = ({ data }) => {
	return (
		<main.FonctionnementMain>
			<HeaderFonctionnement data={data} />
			<main.Divider marginTop="75" />
			<InfoFicheFonctionnement data={data} />
			<main.Divider marginTop="250" />
			<NotationFonctionnement data={data} />
			<TauxFonctionnement data={data} />
		</main.FonctionnementMain>
	);
}
// Export Fonctionnement
export default Fonctionnement;
