import { Theme, createStyles } from "@material-ui/core/styles";

const Style = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    section_style: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(20),
    },
    section_filter_style: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    button_filter_style: {
      borderRadius: 20,
    },
    button_create_style: {
      height: 50,
      borderRadius: 10,
    },
    button_create_text_style: {
      fontSize: 20,
      fontFamily: "okta",
      fontWeight: "bold",
      fontStyle: "italic",
    },

    header_style: {
      color: "#343D48",
      fontSize: 90,
      fontFamily: "pattaya",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    subtitle_style: {
      color: "#909090",
      fontSize: 90,
      fontFamily: "pattaya",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    title: {
      color: "back",
      fontSize: 20,
      fontWeight: 400,
    },
    subtitle: {
      color: "gray",
    },
    section_table_style: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },

    table_style: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(10),
    },

    card_container: {},
    card_container_button: {
      paddingTop: theme.spacing(2),
    },
    card_title: {
      paddingLeft: 5,
      paddingRight: 5,
      color: "black",
      fontSize: 14,
    },
    card: {
      position: "relative",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      display: "flex",
      flexDirection: "column",
      borderRadius: 20,
      width: "100%",
      height: 100,
      textAlign: "left",
      justifyContent: "center",
      alignContent: "left",
      padding: 15,
      zIndex: 5,
      boxShadow:
        "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;",
    },
  });

export default Style;
