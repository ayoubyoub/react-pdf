// Call Styles
import main from "../../../assets/css/main-css";
// Call labels
import labels from "../../labels/labels.json";
// Notation Content
export const Notation = ({ data }) => (
  <main.NotationContainer>
    <main.NotationTitre>{labels.notationTitle}</main.NotationTitre>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical
          border="true"
          bottom="true"
          right="true"
          left="true"
        >
          <main.NotationBox>
            <main.NotationTitle></main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical title="true" bottom="true" left="true">
          <main.NotationBox>
            <main.NotationTitle>{labels.anneePrecedente}</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical title="true" left="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle>{labels.anneeActuelle}</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">
              {labels.notation}
            </main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>
              {data.notationAnneePrecedente}
            </main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>{data.notationAnneeActuelle}</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">
              {labels.mouvementConfie}
            </main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>
              {data.mouvementConfiePrecedente}
            </main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>
              {data.mouvementConfieActuelle}
            </main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">
              {labels.pourcentageChiffreAffaires}
            </main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true">
          <main.NotationBox>
            <main.NotationText>
              {data.pourcentageChiffreAffairesPrecedente}
            </main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true">
          <main.NotationBox>
            <main.NotationText>
              {data.pourcentageChiffreAffairesActuelle}
            </main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>
  </main.NotationContainer>
);
