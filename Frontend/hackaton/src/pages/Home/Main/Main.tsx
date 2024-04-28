import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Falcon from "../../../assets/img/Falcon.png";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Box component="section" marginTop={10} marginBottom={10}>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h2" gutterBottom>
                ScriptBit
              </Typography>
              <Box>
                <Typography>Team members:</Typography>
                <Typography>
              <TypeAnimation
      sequence={[
        'Ivan Fedoniuk | FULLSTACK developer',
        1000,
        'Dmytro Skorokhodov | Frontend Developer',
        1000,
        'Yurii Dilai | Frontend Developer',
        1000,
        'Yaroslav Bychkov | Backend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
              </Typography>
              </Box>
              <Typography variant="body1" gutterBottom maxWidth="sm">
              The ScriptBit team is a tight-knit group of skilled individuals united by a common goal: to create impactful and innovative software solutions. With a blend of creativity, expertise, and dedication, we strive to exceed expectations and drive success in every project we undertake.
              </Typography>
              <Grid container spacing={3} marginTop={1}>
                <Grid item>
                  <Link to={"/user/id/requests"}>
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
          <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
  <MouseParallaxChild factorX={0.3} factorY={0.5}>
  <img
                src={Falcon}
                alt="Description of the image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
  </MouseParallaxChild>
</MouseParallaxContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
