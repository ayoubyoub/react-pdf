// Call Styles
import main from "../../../assets/css/main-css";
// Call labels
import labels from "../../labels/labels.json";
// Taux Content
export const Taux = ({ data }) => (
  <main.TauxContainer>
    <main.TauxTitre>{labels.tauxTitle}</main.TauxTitre>

    <main.TauxContainerMain>
      <main.TauxHorizontal>
        <main.TauxVertical title="true" bottom="true" extra="true">
          <main.TauxBox>
            <main.TauxTitle normal="true">
              {labels.lignesDeCredits}
            </main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical title="true" left="true" bottom="true">
          <main.TauxBox>
            <main.TauxTitle>{labels.applique}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical title="true" left="true" bottom="true">
          <main.TauxBox>
            <main.TauxTitle>{labels.sollicite}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical title="true" left="true" bottom="true">
          <main.TauxBox>
            <main.TauxTitle>{labels.propose}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical title="true" left="true" bottom="true">
          <main.TauxBox>
            <main.TauxTitle>{labels.prevuParLaGrille}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical title="true" left="true" bottom="true">
          <main.TauxBox>
            <main.TauxTitle>{labels.tauxAccorde}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
      </main.TauxHorizontal>
    </main.TauxContainerMain>

    <main.TauxContainerMain>
      <main.TauxHorizontal>
        <main.TauxVertical extra="true">
          <main.TauxBox>
            <main.TauxTitle normal="true">
              {data.lignesDeCredits}
            </main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical left="true">
          <main.TauxBox>
            <main.TauxTitle>{data.applique}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical left="true">
          <main.TauxBox>
            <main.TauxTitle>{data.sollicite}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical left="true">
          <main.TauxBox>
            <main.TauxTitle>{data.propose}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical left="true">
          <main.TauxBox>
            <main.TauxTitle>{data.prevuParLaGrille}</main.TauxTitle>
          </main.TauxBox>
        </main.TauxVertical>
        <main.TauxVertical left="true" title="true">
          <main.TauxBox>
            <main.TauxText>{data.tauxAccorde}</main.TauxText>
          </main.TauxBox>
        </main.TauxVertical>
      </main.TauxHorizontal>
    </main.TauxContainerMain>
  </main.TauxContainer>
);
