import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validation/validation";

export default function Login() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmitForm = (data) => {
    const isValidEmail = validateEmail(data.email);
    const isValidPassword = validatePassword(data.password);
    if (isValidEmail.isError || isValidPassword.isError) {
      if (isValidEmail.isError && isValidPassword.isError) {
        [
          {
            type: "manual",
            name: "email",
            message: isValidEmail.message,
          },
          {
            type: "manual",
            name: "password",
            message: isValidPassword.message,
          },
        ].forEach(({ name, type, message }) =>
          setError(name, { type, message })
        );
      } else if (isValidEmail.isError) {
        setError("email", { type: "custom", message: isValidEmail.message });
      } else if (isValidPassword.isError) {
        setError("password", {
          type: "custom",
          message: isValidPassword.message,
        });
      }
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ marginBottom: { xs: 5, sm: 10 } }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message?.toString()}
                  autoComplete="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    error={Boolean(errors.password)}
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <Box sx={{ color: "red", fontSize: "14px" }}>
                      {errors.password.message}
                    </Box>
                  )}
                </FormControl>
              </Grid>
              <ErrorMessage errors={errors} name="error" />
              <Grid item xs={12}>
                <Button fullWidth variant="contained" type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
