import { createMuiTheme, createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4F6F52",
    },
    secondary: {
      main: "#BACD92",
    },
    background: {
      default: "#F6F5F2", // Setting default background color
    },
    error: {
      main: "#e57373",
    },
    warning: {
      main: "#ffb74d",
    },
    info: {
      main: "#4fc3f7",
    },
    success: {
      main: "#81c784",
    },
  },
});
