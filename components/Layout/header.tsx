import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Container, Grid } from "@material-ui/core";
import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />

        <link
          rel="preload"
          href="static/fonts/28-day-later/28-Days-Later.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="static/fonts/pattaya/Pattaya-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/okta/Okta-BoldItalic.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/okta/Okta-ExtraLight.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <AppBar position="static">
        <Container fixed>
          <Toolbar style={{ width: "100%", height: "100px" }}></Toolbar>
        </Container>
      </AppBar>
      <style jsx global>
        {`
          @font-face {
            font-family: "28-day-later";
            src: url("static/fonts/28-day-later/28-Days-Later.ttf");
            font-style: normal;
            font-weight: 600;
          }
          @font-face {
            font-family: "pattaya";
            src: url("static/fonts/pattaya/Pattaya-Regular.ttf");
            font-style: normal;
            font-weight: 400;
          }
          @font-face {
            font-family: "Okta";
            src: url("static/fonts/okta/Okta-BoldItalic.otf");
            font-style: bold;
            font-weight: 600;
          }
          @font-face {
            font-family: "Okta";
            src: url("static/fonts/okta/Okta-ExtraLight.otf");
            font-style: light;
            font-weight: 500;
          }
          a:link {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}
