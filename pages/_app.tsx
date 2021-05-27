import React from "react";
import App from "next/app";
import { AppProps } from "next/app";
import { wrapper } from "../redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "../components/Layout/layout";

interface Props {}

function TicketApp({ Component, pageProps }: AppProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(15,27,49,1)",
      },
      secondary: {
        main: "rgba(255,138,0,1)",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

TicketApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(TicketApp);
