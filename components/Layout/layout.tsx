import React, { ReactElement, ReactNode } from "react";
import Header from "./header";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      height: "100vh",
      backgroundPosition: "bottom",
    },
  })
);
export default function Layout({ children }: Props): ReactElement {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <main className={classes.content}>{children}</main>

      <style jsx global>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </React.Fragment>
  );
}
