import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import PropTypes from "prop-types";
import React from "react";
import DefaultTheme from "react-tailwhip";
import normalizeCSS from "../../assets/css/normalize-css";

const Layout = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <Global styles={css([normalizeCSS()])} />
    <html>
      <head>
        <meta charSet="utf8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
