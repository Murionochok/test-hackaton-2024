import { FC, ReactElement } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import styles from "./Footer.module.scss";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
      className={styles.Box}>
      <Divider />
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography
              variant="body1"
              sx={{ letterSpacing: 1 }}
              color="grey"
              marginTop={3}>
              ScriptBit CopyRight 2024
            </Typography>
            <Typography variant="body2" color="grey" marginTop={0.5}>
              © 2024 All Rights Protected
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
