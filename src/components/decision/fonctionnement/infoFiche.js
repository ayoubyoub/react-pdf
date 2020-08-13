// Call Styles
import {
  FicheContainer,
  FicheTitre,
  FicheContainerMain,
  FicheHorizontal,
  FicheVertical,
  FicheBox,
  Title,
  Text,
} from "../../../assets/css/normalize-css";
// Fiche Content
export const InfoFiche = () => (
  <FicheContainer>
    <FicheTitre>FICHE DE DÉCISION C.C.T / CRÉDIT FONCTIONNEMENT</FicheTitre>

    <FicheContainerMain>
      <FicheHorizontal>
        <FicheVertical>
          <FicheBox>
            <Title>BÉNÉFICIAIRE</Title>
          </FicheBox>
          <FicheBox>
            <Text>LA BOITE SARL</Text>
          </FicheBox>
        </FicheVertical>
        <FicheVertical>
          <FicheBox>
            <Title>ACTIVITÉ</Title>
          </FicheBox>
          <FicheBox>
            <Text>AGROALIMENTAIRE ET DISTRIBUTION</Text>
          </FicheBox>
        </FicheVertical>
        <FicheVertical>
          <FicheBox>
            <Title>DATE DE CRÉATION</Title>
          </FicheBox>
          <FicheBox>
            <Text>07/11/2012</Text>
          </FicheBox>
        </FicheVertical>
      </FicheHorizontal>
    </FicheContainerMain>

    <FicheContainerMain>
      <FicheHorizontal>
        <FicheVertical>
          <FicheBox>
            <Title>RADICAL</Title>
          </FicheBox>
          <FicheBox>
            <Text>8773949</Text>
          </FicheBox>
        </FicheVertical>
        <FicheVertical>
          <FicheBox>
            <Title>RÉFÉRENCE DU DOSSIER</Title>
          </FicheBox>
          <FicheBox>
            <Text>1825705300</Text>
          </FicheBox>
        </FicheVertical>
        <FicheVertical>
          <FicheBox>
            <Title>DATE D'ENTRÉE EN RELATION</Title>
          </FicheBox>
          <FicheBox>
            <Text>19/04/2013</Text>
          </FicheBox>
        </FicheVertical>
      </FicheHorizontal>
    </FicheContainerMain>
  </FicheContainer>
);
