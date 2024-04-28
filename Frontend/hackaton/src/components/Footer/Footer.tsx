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
        <Typography variant="h5" display="flex" alignItems="center">
          Our Contacts
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={3}>
            <Typography>
              <a href="mailto:example@gmail.com">gmail</a>
            </Typography>
            <Typography>
              <a href="https://github.com/example">GitHub</a>
            </Typography>
            <Typography>
              <a href="https://www.linkedin.com/in/example">LinkedIn</a>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography>
              <a href="mailto:example@gmail.com">gmail</a>
            </Typography>
            <Typography>
              <a href="https://github.com/example">GitHub</a>
            </Typography>
            <Typography>
              <a href="https://www.linkedin.com/in/example">LinkedIn</a>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography>
              <a href="mailto:example@gmail.com">gmail</a>
            </Typography>
            <Typography>
              <a href="https://github.com/example">GitHub</a>
            </Typography>
            <Typography>
              <a href="https://www.linkedin.com/in/example">LinkedIn</a>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography>
              <a href="mailto:example@gmail.com">gmail</a>
            </Typography>
            <Typography>
              <a href="https://github.com/example">GitHub</a>
            </Typography>
            <Typography>
              <a href="https://www.linkedin.com/in/example">LinkedIn</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
