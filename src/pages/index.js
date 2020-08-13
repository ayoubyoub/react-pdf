import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import DefaultTheme from "react-tailwhip";
import Fonctionnement from "../components/decision/fonctionnement";
import Layout from "../components/layout";
import { componentToPDFBuffer } from "../assets/lib";
import { Footer } from "../components/footer";
import normalizeCSS from "../assets/css/normalize-css";

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
        <Global styles={css([normalizeCSS()])} />
        <Fonctionnement />
        <button
          style={{
            position: "absolute",
            cursor: "pointer",
            right: 0,
            top: 0,
            margin: "5px",
          }}
          onClick={() =>
            window.open("http://localhost:3000/?exportPDF=true", "_blank")
          }
        >
          PDF
        </button>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default IndexPage;
