import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import sxHeaderStyles from "./sxHeaderStyles";
import ThemeButton from "../ThemeButton/ThemeButton";
import { NavLink } from "react-router-dom";

const pages = ["Requests"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={sxHeaderStyles.logo}>
              LOGO
            </Typography>
          </NavLink>
          <Box sx={sxHeaderStyles.iconButton}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={sxHeaderStyles.menu}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NavLink to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={sxHeaderStyles.smallLogo}>
              LOGO
            </Typography>
          </NavLink>
          <Box sx={sxHeaderStyles.pages}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={sxHeaderStyles.page}>
                <NavLink to={"/requests"}>{page}</NavLink>
              </Button>
            ))}
          </Box>
          <ThemeButton />
          <Box sx={sxHeaderStyles.actions}>
            <Button variant="contained" sx={sxHeaderStyles.loginHide}>
              Login
            </Button>
            <Button variant="contained">Register</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
