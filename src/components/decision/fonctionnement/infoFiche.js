// Call Styles
import main from "../../../assets/css/main-css";
// Call labels
import labels from "../../labels/labels.json";
// Fiche Content
export const InfoFiche = ({ data }) => (
  <main.FicheContainer>
    <main.FicheTitre>{labels.ficheTitre}</main.FicheTitre>

    <main.FicheContainerMain>
      <main.FicheHorizontal>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.beneficiare}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.beneficiare}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.activite}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.activite}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.dateCreation}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.dateCreation}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
      </main.FicheHorizontal>
    </main.FicheContainerMain>

    <main.FicheContainerMain>
      <main.FicheHorizontal>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.radical}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.radical}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.refDossier}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.refDossier}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
        <main.FicheVertical>
          <main.FicheBox>
            <main.Title>{labels.dateEntreeEnRelation}</main.Title>
          </main.FicheBox>
          <main.FicheBox>
            <main.Text>{data.dateEntreeEnRelation}</main.Text>
          </main.FicheBox>
        </main.FicheVertical>
      </main.FicheHorizontal>
    </main.FicheContainerMain>
  </main.FicheContainer>
);
