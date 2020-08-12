import styled from "@emotion/styled";

import { InfoFiche } from "./infoFiche";
import { Notation } from "./notation";
import { Taux } from "./taux";
import { Header } from "../../header";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.padding[10],
  backgroundColor: theme.colors.white,
}));

const DividerA = styled("div")(({ theme }) => ({
	borderTop: "1px solid #979797",
	marginTop: 75,
	width: theme.width.full,
	position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

const DividerB = styled("div")(({ theme }) => ({
	borderTop: "1px solid #979797",
	marginTop: 250,
	width: theme.width.full,
	position: "absolute",
  right: 0,
  top: 0,
  left: 0,
}));

const Fonctionnement = () => (
  <Container>
    <Header />
		<DividerA />
    <InfoFiche />
		<DividerB />
		<Notation />
		<Taux />
  </Container>
);

export default Fonctionnement;
