import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import DefaultTheme from "react-tailwhip";
import Fonctionnement from "../components/decision/fonctionnement";
import Layout from "../components/layout";
import { componentToPDFBuffer } from "../lib";

class IndexPage extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const exportPDF = query.exportPDF === "true";
    const isServer = !!req;
    if (!process.browser && isServer && exportPDF) {
      const buffer = await componentToPDFBuffer(
        <Layout>
          <Fonctionnement />
        </Layout>
      );
      res.setHeader(
        "Content-disposition",
        'attachment; filename="Fonctionnement.pdf'
      );
      res.setHeader("Content-Type", "application/pdf");
      res.end(buffer);
    }
    return {
      pdf: null,
    };
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Open+Sans");
            html,
            body {
              margin: 0;
							overflow: "hidden";
							-webkit-print-color-adjust: exact;
            }
            * {
              boxsizing: "border-box";
            }
          `}
        />
        <Fonctionnement />
      </ThemeProvider>
    );
  }
}

export default IndexPage;
