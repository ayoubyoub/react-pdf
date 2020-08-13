import styled from "@emotion/styled";

const Container = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 500,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

const Titre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  margin: theme.margin[0],
	marginBottom: 25,
	marginLeft: 21,
}));

const Flexcontainer = styled("div")(({ theme }) => ({
  width: theme.width.full,
}));

const Hsplit = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: theme.width.full,
}));

const Vsplit = styled("div")(({ theme, title, border, left, bottom, right, extra }) => ({
  display: "flex",
	flexDirection: "column",
	border: border ? "1px solid transparent" : "1px solid #979797",
	borderLeft: left ? "1px solid transparent" : "1px solid #979797",
	borderBottom: bottom ? "1px solid transparent" : "1px solid #979797",
	borderRight: right ? "1px solid #979797" : "1px solid #979797",
	width: extra ? theme.width.full : 500,
	backgroundColor: title ? "#f6f6f6" : "",
}));

const Box = styled("div")(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  width: theme.width.full,
  height: 40,
}));

const Title = styled("p")(({ theme, normal }) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  alignSelf: "center",
	justifyContent: normal ? "flex-start" : "center",
	marginLeft: normal ? 20 : 0,
  fontSize: "11px",
  color: "#4a4a4a",
  fontWeight: "600",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
  width: theme.width.full,
  height: 40,
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#883744",
  margin: theme.margin[0],
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

export const Taux = ({ headings }) => (
  <Container>
    <Titre>2 . Taux : </Titre>

    <Flexcontainer>
      <Hsplit>
        <Vsplit title="true" bottom="true" extra="true">
          <Box>
            <Title normal="true">Lignes de crédits</Title>
          </Box>
        </Vsplit>
        <Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Appliqué</Title>
          </Box>
        </Vsplit>
        <Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Sollicité</Title>
          </Box>
        </Vsplit>
				<Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Proposé</Title>
          </Box>
        </Vsplit>
				<Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Prévu par la grille</Title>
          </Box>
        </Vsplit>
				<Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Taux accordé</Title>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>

    <Flexcontainer>
      <Hsplit>
        <Vsplit extra="true">
          <Box>
            <Title normal="true">CREDIT MOYEN LONG TERME TAUX FIXE</Title>
          </Box>
        </Vsplit>
        <Vsplit left="true">
          <Box>
            <Title>12 %</Title>
          </Box>
        </Vsplit>
				<Vsplit left="true">
          <Box>
            <Title>09 %</Title>
          </Box>
        </Vsplit>
				<Vsplit left="true">
          <Box>
            <Title>10 %</Title>
          </Box>
        </Vsplit>
				<Vsplit left="true">
          <Box>
            <Title>12 %</Title>
          </Box>
        </Vsplit>
        <Vsplit left="true" title="true">
          <Box>
            <Text>11 %</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>
  </Container>
);
