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
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validation/validation";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { LoginFormData } from "../../interfaces/UserInterfaces";
import { postLoginUser, userActions } from "../../store/user/user-slice";
import { ReduxInterface } from "../../store";

export default function Login() {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const dispatchReq: ThunkDispatch<LoginFormData, undefined, AnyAction> =
    useDispatch();

  const loading = useSelector((state: ReduxInterface) => state.user.loading);
  const error = useSelector((state: ReduxInterface) => state.user.error);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmitForm = async (data) => {
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
    } else {
      console.log(data);
      const response = await dispatchReq(postLoginUser(data));
      if (response.payload.result.user.id) {
        localStorage.setItem("USER_ID", response.payload.result.user.id);
        localStorage.setItem("TOKEN", response.payload.result.token);
        dispatch(
          userActions.userState({
            loading: false,
            user: { isAuthenticated: true },
          })
        );
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
                      {errors.password?.message}
                    </Box>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {loading
                  ? ""
                  : error && (
                      <Box sx={{ color: "red", fontSize: "14px" }}>{error}</Box>
                    )}
              </Grid>

              <Grid item xs={12}>
                <Box
                  component="div"
                  style={{ position: "relative", width: "100%" }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{ mt: 2 }}>
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
