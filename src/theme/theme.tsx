import { ThemeProvider, createTheme } from "@mui/material/styles";

//import { useSelector } from "react-redux";

declare module "@mui/material/styles" {
  interface CustomTheme {
    boxShadow: string;
  }

  interface Theme extends CustomTheme {}
  interface PaletteOptions extends CustomTheme {}
}

const ToggleColorMode = (p: any) => {
  const mode = "light";
  const theme = createTheme({
    typography: {
      allVariants: {
        color: "black",
      },
      fontFamily: "Lexend Deca",
      h1: {
        fontSize: "5.625rem",
      },
      h2: {
        fontSize: "5rem",
      },
      h3: {
        fontSize: "3.9rem",
      },
      h4: {
        fontSize: "3rem",
      },
      h5: {
        fontSize: "2.5rem",
      },
      h6: {
        fontSize: "2.25rem",
      },
      subtitle1: {
        fontSize: "1.875rem",
      },
      subtitle2: {
        fontSize: "1.45rem",
      },
      body1: {
        fontSize: "1.25rem",
      },
      body2: {
        fontSize: "1rem",
      },
      button: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: "0.875rem",
        lineHeight: "1.36",
      },
      overline: {
        fontSize: "0.75rem",
        letterSpacing: "0.03333em",
        lineHeight: "1.66",
        textTransform: "none",
      },
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            text: {
              primary: "rgb(255, 255, 255)",
              disabled: "#523a51",
            },
            button: {
              primary: "rgba(73,99,237,0.8)",
              hover: "#0F4C75",
            },
            background: {
              default: "#f3f2ef",
              paper: "#ffff",
            },

            divider: "rgb(213, 217, 233)",
            success: { main: "rgb(46, 125, 50)" },
            action: {
              active: "rgb(236, 64, 122)",
              hover: "#ebebeb",
            },
            table: {
              text: "black",
            },
            boxShadow: {
              default:
                "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
            },
          }
        : {}),
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
    },
  });

  return <ThemeProvider theme={theme} {...p} />;
};

export default ToggleColorMode;
