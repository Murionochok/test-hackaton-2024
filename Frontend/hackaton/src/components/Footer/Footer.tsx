import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

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
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">React Starter App</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
