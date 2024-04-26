import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

import mainImage from "../../../assets/img/1000_F_360323951_XtIbMPnjD5zHOmSh2CFpKvo4jvkPXjau.jpg";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Box component="section" marginTop={10} marginBottom={10}>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h2" gutterBottom>
                Title
              </Typography>
              <Typography variant="body1" gutterBottom maxWidth="sm">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Grid container spacing={3} marginTop={1}>
                <Grid item>
                  <Link to={"/requests"}>
                    <Button variant="contained">Requests</Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/register"}>
                    <Button variant="contained">Register</Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{ display: "flex", placeItems: "center", padding: "10px" }}>
              <img
                src={mainImage}
                alt="Description of the image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
