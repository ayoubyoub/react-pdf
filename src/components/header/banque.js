import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => ({
  padding: theme.padding[3],
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

export const BanqueInfo = () => (
  <Container>
    <Title>BANQUE</Title>
    <Text>78</Text>
  </Container>
);
