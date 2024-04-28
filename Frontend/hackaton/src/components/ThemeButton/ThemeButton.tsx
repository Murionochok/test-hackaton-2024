import { LightMode, DarkMode } from "@mui/icons-material";
import { Box, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ReduxInterface } from "../../store";
import { themeActions } from "../../store/theme-slice";

export default function ThemeButton() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (state: ReduxInterface) => state.theme.isDarkMode
  );

  const changeThemeHandler = () => {
    dispatch(themeActions.changeTheme());
  };
  return (
    <Box
      component="button"
      display={{ xs: "none", sm: "flex" }}
      flexDirection="row"
      alignItems="center">
      {isDarkTheme ? <DarkMode /> : <LightMode />}
      <Switch onChange={changeThemeHandler} color="default" defaultChecked />
    </Box>
  );
}
