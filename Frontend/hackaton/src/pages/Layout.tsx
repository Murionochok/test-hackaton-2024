import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { ReduxInterface } from "../store";
import { darkTheme, lightTheme } from "../utils/themes/themes";

export default function Layout() {
  const isDarkTheme = useSelector(
    (state: ReduxInterface) => state.theme.isDarkTheme
  );
  console.log(isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
