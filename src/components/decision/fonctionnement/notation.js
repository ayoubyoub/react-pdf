// Call Styles
import {
  NotationContainer,
  NotationTitre,
  NotationContainerMain,
  NotationHorizontal,
  NotationVertical,
  NotationBox,
  NotationTitle,
  NotationText,
} from "../../../assets/css/normalize-css";
// Notation Content
export const Notation = () => (
  <NotationContainer>
    <NotationTitre>
      1 . Notation, mouvement confié et chiffre d’affaires :
    </NotationTitre>

    <NotationContainerMain>
      <NotationHorizontal>
        <NotationVertical border="true" bottom="true" right="true" left="true">
          <NotationBox>
            <NotationTitle></NotationTitle>
          </NotationBox>
        </NotationVertical>
        <NotationVertical title="true" bottom="true" left="true">
          <NotationBox>
            <NotationTitle>Année précédente</NotationTitle>
          </NotationBox>
        </NotationVertical>
        <NotationVertical title="true" left="true" bottom="true">
          <NotationBox>
            <NotationTitle>Année actuelle</NotationTitle>
          </NotationBox>
        </NotationVertical>
      </NotationHorizontal>
    </NotationContainerMain>

    <NotationContainerMain>
      <NotationHorizontal>
        <NotationVertical title="true" bottom="true">
          <NotationBox>
            <NotationTitle normal="true">Notation</NotationTitle>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true" bottom="true">
          <NotationBox>
            <NotationText>B</NotationText>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true" bottom="true">
          <NotationBox>
            <NotationText>B</NotationText>
          </NotationBox>
        </NotationVertical>
      </NotationHorizontal>
    </NotationContainerMain>

    <NotationContainerMain>
      <NotationHorizontal>
        <NotationVertical title="true" bottom="true">
          <NotationBox>
            <NotationTitle normal="true">Mouvement confié</NotationTitle>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true" bottom="true">
          <NotationBox>
            <NotationText>809 008</NotationText>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true" bottom="true">
          <NotationBox>
            <NotationText>734 924</NotationText>
          </NotationBox>
        </NotationVertical>
      </NotationHorizontal>
    </NotationContainerMain>

    <NotationContainerMain>
      <NotationHorizontal>
        <NotationVertical title="true">
          <NotationBox>
            <NotationTitle normal="true">
              Pourcentage de chiffre d’affaires
            </NotationTitle>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true">
          <NotationBox>
            <NotationText>50 %</NotationText>
          </NotationBox>
        </NotationVertical>
        <NotationVertical left="true">
          <NotationBox>
            <NotationText>50 %</NotationText>
          </NotationBox>
        </NotationVertical>
      </NotationHorizontal>
    </NotationContainerMain>
  </NotationContainer>
);
