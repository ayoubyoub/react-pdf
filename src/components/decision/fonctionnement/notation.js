// Call Styles
import main from "../../../assets/css/main-css";
// Notation Content
export const Notation = () => (
  <main.NotationContainer>
    <main.NotationTitre>
      1 . Notation, mouvement confié et chiffre d’affaires :
    </main.NotationTitre>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical border="true" bottom="true" right="true" left="true">
          <main.NotationBox>
            <main.NotationTitle></main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical title="true" bottom="true" left="true">
          <main.NotationBox>
            <main.NotationTitle>Année précédente</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical title="true" left="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle>Année actuelle</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">Notation</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>B</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>B</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true" bottom="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">Mouvement confié</main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>809 008</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true" bottom="true">
          <main.NotationBox>
            <main.NotationText>734 924</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>

    <main.NotationContainerMain>
      <main.NotationHorizontal>
        <main.NotationVertical title="true">
          <main.NotationBox>
            <main.NotationTitle normal="true">
              Pourcentage de chiffre d’affaires
            </main.NotationTitle>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true">
          <main.NotationBox>
            <main.NotationText>50 %</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
        <main.NotationVertical left="true">
          <main.NotationBox>
            <main.NotationText>50 %</main.NotationText>
          </main.NotationBox>
        </main.NotationVertical>
      </main.NotationHorizontal>
    </main.NotationContainerMain>
  </main.NotationContainer>
);
