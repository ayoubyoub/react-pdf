import styled from "@emotion/styled";

const Container = styled("footer")(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: 2,
}));

const Page = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
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

export const Footer = () => (
  <Container>
    <div>
      <Text>FICHE DE DÉCISION C.C.T / CRÉDIT FONCTIONNEMENT</Text>
      <Content>
        <Title>RÉFÉRENCE DU DOSSIER :</Title>
        <Text>1825705300</Text>
      </Content>
    </div>
    <Page>
      <Text>1/4</Text>
    </Page>
  </Container>
);
