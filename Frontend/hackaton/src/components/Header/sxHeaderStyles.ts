const sxHeaderStyles = {
  logo: {
    marginRight: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  iconButton: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  menu: {
    display: { xs: "block", md: "none" },
  },
  smallLogo: {
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  },
  pages: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  page: { my: 2, color: "white", display: "block" },
  actions: {
    flexGrow: 0,
    display: "flex",
    gap: "15px",
    alignItems: "center",
    justifyContent: "center",
  },
  loginHide: { display: { xs: "none", sm: "block" } },
};

export default sxHeaderStyles;
