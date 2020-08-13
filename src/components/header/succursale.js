import styled from "@emotion/styled";

const Container = styled("div")(({ theme }) => ({
  padding: theme.padding[3],
  width: theme.width[40],
}));

const Title = styled("p")(({ theme }) => ({
	fontSize: "11px",
	color: "#4a4a4a",
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
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "1px",
}));

export const SuccursaleInfo = () => (
  <Container>
    <Title>SUCCURSALE</Title>
    <Text>626</Text>
  </Container>
);
