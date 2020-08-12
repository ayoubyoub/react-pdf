import styled from "@emotion/styled";

const Container = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 270,
  width: theme.width.full,
  position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

const Titre = styled("p")(({ theme }) => ({
  fontSize: "12px",
  color: "#4a4a4a",
  fontFamily: "Open Sans",
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

const Vsplit = styled("div")(({ theme, title, border, left, bottom, right }) => ({
  display: "flex",
	flexDirection: "column",
	border: border ? "1px solid transparent" : "1px solid #979797",
	borderLeft: left ? "1px solid transparent" : "1px solid #979797",
	borderBottom: bottom ? "1px solid transparent" : "1px solid #979797",
	borderRight: right ? "1px solid #979797" : "1px solid #979797",
	width: theme.width.full,
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
  fontFamily: "Open Sans",
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
  fontFamily: "Open Sans",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

export const Notation = ({ headings }) => (
  <Container>
    <Titre>1 . Notation, mouvement confié et chiffre d’affaires : </Titre>

    <Flexcontainer>
      <Hsplit>
        <Vsplit border="true" bottom="true" right="true">
          <Box>
            <Title> </Title>
          </Box>
        </Vsplit>
        <Vsplit title="true" bottom="true" left="true">
          <Box>
            <Title>Année précédente</Title>
          </Box>
        </Vsplit>
        <Vsplit title="true" left="true" bottom="true">
          <Box>
            <Title>Année actuelle</Title>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>

    <Flexcontainer>
      <Hsplit>
        <Vsplit title="true" bottom="true">
          <Box>
            <Title normal="true">Notation</Title>
          </Box>
        </Vsplit>
        <Vsplit left="true" bottom="true">
          <Box>
            <Text>B</Text>
          </Box>
        </Vsplit>
        <Vsplit left="true" bottom="true">
          <Box>
            <Text>B</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>

    <Flexcontainer>
      <Hsplit>
        <Vsplit title="true" bottom="true">
          <Box>
            <Title normal="true">Mouvement confié</Title>
          </Box>
        </Vsplit>
        <Vsplit left="true" bottom="true">
          <Box>
            <Text>809 008</Text>
          </Box>
        </Vsplit>
        <Vsplit left="true" bottom="true">
          <Box>
            <Text>734 924</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>

    <Flexcontainer>
      <Hsplit>
        <Vsplit title="true">
          <Box>
            <Title normal="true">Pourcentage de chiffre d’affaires</Title>
          </Box>
        </Vsplit>
        <Vsplit left="true">
          <Box>
            <Text>50 %</Text>
          </Box>
        </Vsplit>
        <Vsplit left="true">
          <Box>
            <Text>50 %</Text>
          </Box>
        </Vsplit>
      </Hsplit>
    </Flexcontainer>
  </Container>
);
