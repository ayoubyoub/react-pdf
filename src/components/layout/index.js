import { ThemeProvider } from "emotion-theming";
import PropTypes from "prop-types";
import React from "react";
import DefaultTheme from "react-tailwhip";
import { Footer } from "../footer";

const Layout = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    <html>
      <head>
        <meta charSet="utf8" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
