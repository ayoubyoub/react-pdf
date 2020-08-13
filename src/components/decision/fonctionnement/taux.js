// Call Styles
import {
  TauxContainer,
  TauxTitre,
  TauxContainerMain,
  TauxHorizontal,
  TauxVertical,
  TauxBox,
  TauxTitle,
  TauxText,
} from "../../../assets/css/normalize-css";
// Taux Content
export const Taux = () => (
  <TauxContainer>
    <TauxTitre>2 . Taux : </TauxTitre>

    <TauxContainerMain>
      <TauxHorizontal>
        <TauxVertical title="true" bottom="true" extra="true">
          <TauxBox>
            <TauxTitle normal="true">Lignes de crédits</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical title="true" left="true" bottom="true">
          <TauxBox>
            <TauxTitle>Appliqué</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical title="true" left="true" bottom="true">
          <TauxBox>
            <TauxTitle>Sollicité</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical title="true" left="true" bottom="true">
          <TauxBox>
            <TauxTitle>Proposé</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical title="true" left="true" bottom="true">
          <TauxBox>
            <TauxTitle>Prévu par la grille</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical title="true" left="true" bottom="true">
          <TauxBox>
            <TauxTitle>Taux accordé</TauxTitle>
          </TauxBox>
        </TauxVertical>
      </TauxHorizontal>
    </TauxContainerMain>

    <TauxContainerMain>
      <TauxHorizontal>
        <TauxVertical extra="true">
          <TauxBox>
            <TauxTitle normal="true">
              CREDIT MOYEN LONG TERME TAUX FIXE
            </TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical left="true">
          <TauxBox>
            <TauxTitle>12 %</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical left="true">
          <TauxBox>
            <TauxTitle>09 %</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical left="true">
          <TauxBox>
            <TauxTitle>10 %</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical left="true">
          <TauxBox>
            <TauxTitle>12 %</TauxTitle>
          </TauxBox>
        </TauxVertical>
        <TauxVertical left="true" title="true">
          <TauxBox>
            <TauxText>11 %</TauxText>
          </TauxBox>
        </TauxVertical>
      </TauxHorizontal>
    </TauxContainerMain>
  </TauxContainer>
);
