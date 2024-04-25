import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@mui/material";

import { darkTheme } from "../utils/themes/Themes";

export default function Layout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
