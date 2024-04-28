import { Container, Typography, Button } from "@mui/material";

const ErrorPage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h1" gutterBottom color="error">
        Oops!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1" gutterBottom>
        {errorMessage}
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go Back to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
