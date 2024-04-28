import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { ReduxInterface } from "../store";
import { darkTheme, theme } from "../utils/themes/themes";
import { ModalProvider } from "../components/Modal/utils/Modal";

export default function Layout() {
  const isDarkTheme = useSelector(
    (state: ReduxInterface) => state.theme.isDarkMode
  );

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <ModalProvider>
        <CssBaseline />
        <Header />
        <Outlet />
        <Footer />
      </ModalProvider>
    </ThemeProvider>
  );
}
