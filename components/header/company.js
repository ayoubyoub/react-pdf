import styled from '@emotion/styled';

const Container = styled('div')(({ theme }) => ({
	padding: theme.padding[3],
  width: theme.width[60]
}));

const Title = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.bold,
  margin: theme.margin[0]
}));

export const CompanyInfo = () => (
  <Container>
    <Title>BANQUE POPULAIRE</Title>
  </Container>
);
