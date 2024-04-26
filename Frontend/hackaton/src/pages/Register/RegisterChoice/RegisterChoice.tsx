import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function RegisterChoice() {
  return (
    <Container maxWidth="md" component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography variant="h4" marginBottom={5}>
          Register As
        </Typography>
        <Grid container spacing={5} textAlign="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 5 }}>
              <Typography variant="h5" gutterBottom>
                User
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                tenetur non aspernatur eveniet unde assumenda officia labore
                dignissimos ratione eaque. Itaque numquam aliquid cum nobis
                voluptas animi ullam fugiat deserunt?
              </Typography>
              <NavLink to={"/register/user"}>
                <Button variant="contained">Register As User</Button>
              </NavLink>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ padding: 5 }}>
              <Typography variant="h5" gutterBottom>
                Volunteer
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                tenetur non aspernatur eveniet unde assumenda officia labore
                dignissimos ratione eaque. Itaque numquam aliquid cum nobis
                voluptas animi ullam fugiat deserunt?
              </Typography>
              <NavLink to={"/register/volunteer"}>
                <Button variant="contained">Register As Volunteer</Button>
              </NavLink>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
