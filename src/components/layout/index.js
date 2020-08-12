import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import PropTypes from "prop-types";
import React from "react";
import DefaultTheme from "react-tailwhip";
import { Footer } from "../footer";

const Layout = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
		<Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Open+Sans");
            html,
            body {
              margin: 0;
							overflow: hidden;
							-webkit-print-color-adjust: exact;
            }
            * {
              boxsizing: "border-box";
            }
          `}
        />
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
