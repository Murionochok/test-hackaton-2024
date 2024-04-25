import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import mainImage from "../../../assets/img/MainAfter.webp";

export default function MainSection() {
  return (
    <Box component="section" marginTop={10}>
      <Container maxWidth="xl">
        <Grid>
          <Box component="div">
            <Typography variant="h2" gutterBottom>
              Title
            </Typography>
            <Typography variant="body1" gutterBottom maxWidth="sm">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained">Requests</Button>
            </Stack>
          </Box>
          <Paper>
            <img
              src={mainImage}
              alt="Description of the image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}
