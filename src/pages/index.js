import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React, { Component } from "react";
import parse from "urlencoded-body-parser";
import DefaultTheme from "react-tailwhip";
import Fonctionnement from "../components/decision/fonctionnement";
import Layout from "../components/layout";
import { componentToPDFBuffer } from "../assets/lib";
import { Footer } from "../components/footer";
import normalizeCSS from "../assets/css/normalize-css";

class IndexPage extends Component {
  static async getInitialProps(context) {
    if (context.req.method === "POST") {
      const req = await parse(context.req);
      const data = JSON.parse(Object.keys(req)[0]);
      const buffer = await componentToPDFBuffer(
        <Layout>
          <Fonctionnement data={data} />
          <Footer data={data} />
        </Layout>
      );
      context.res.end(buffer);
    }
    return {
      pdf: null,
    };
  }

  render() {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Global styles={css([normalizeCSS()])} />
        <Fonctionnement data={data} />
        <button
          style={{
            position: "absolute",
            cursor: "pointer",
            right: 0,
            top: 0,
            margin: "5px",
          }}
          onClick={() => window.open("http://localhost:4000", "_blank")}
        >
          PDF
        </button>
        <Footer data={data} />
      </ThemeProvider>
    );
  }
}

export default IndexPage;
