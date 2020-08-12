import styled from "@emotion/styled";

const Container = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 86,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 20,
}));

const Titre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
	margin: theme.margin[0],
	marginBottom: 14,
}));

const Flexcontainer = styled("div")(({ theme }) => ({
	width: theme.width.full,
	paddingBottom: 22
}));

const Hsplit = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const Vsplit = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const Box = styled("div")(({ theme }) => ({
  margin: "5px 40px 0 0",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: 350,
}));

const Title = styled("p")(({ theme }) => ({
  fontSize: "11px",
  color: "#4a4a4a",
  fontFamily: "Open Sans",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontFamily: "Open Sans",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

export const InfoFiche = ({ headings }) => (
  <Container>
    <Titre>FICHE DE DÉCISION C.C.T / CRÉDIT FONCTIONNEMENT</Titre>

    <Flexcontainer>
      <Hsplit>
        <Vsplit>
          <Box>
            <Title>BÉNÉFICIAIRE</Title>
          </Box>
          <Box>
            <Text>LA BOITE SARL</Text>
          </Box>
        </Vsplit>
        <Vsplit>
          <Box>
            <Title>ACTIVITÉ</Title>
          </Box>
          <Box>
            <Text>AGROALIMENTAIRE ET DISTRIBUTION</Text>
          </Box>
        </Vsplit>
        <Vsplit>
          <Box>
            <Title>DATE DE CRÉATION</Title>
          </Box>
          <Box>
            <Text>07/11/2012</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>

    <Flexcontainer>
      <Hsplit>
        <Vsplit>
          <Box>
            <Title>RADICAL</Title>
          </Box>
          <Box>
            <Text>8773949</Text>
          </Box>
        </Vsplit>
        <Vsplit>
          <Box>
            <Title>RÉFÉRENCE DU DOSSIER</Title>
          </Box>
          <Box>
            <Text>1825705300</Text>
          </Box>
        </Vsplit>
        <Vsplit>
          <Box>
            <Title>DATE D'ENTRÉE EN RELATION</Title>
          </Box>
          <Box>
            <Text>19/04/2013</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>
  </Container>
);
