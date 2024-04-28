import { useState } from "react";
import Box from "@mui/material/Box";

import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  Typography,
  TextField,
  CircularProgress,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormRegisterValidation } from "../../../utils/hooks/useFormRegisterValidation";
import { useNavigate } from "react-router-dom";
import { UserFormData } from "../../../interfaces/UserInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { postRegisterUser, userActions } from "../../../store/user/user-slice";
import { useForm } from "react-hook-form";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { ReduxInterface } from "../../../store";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector((state: ReduxInterface) => state.user.loading);
  const error = useSelector((state: ReduxInterface) => state.user.error);

  const initialFormData: UserFormData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const dispatchReq: ThunkDispatch<UserFormData, undefined, AnyAction> =
    useDispatch();

  const dispatch = useDispatch();

  const { setFormData, errors, validateForm } =
    useFormRegisterValidation(initialFormData);

  const { register, handleSubmit } = useForm();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmitForm = async (data: UserFormData) => {
    const validation = validateForm(data);

    console.log(data);

    if (validation) {
      setFormData(data);

      await dispatchReq(postRegisterUser(data));
      if (error === "") {
        dispatch(
          userActions.userState({
            loading: false,
            user: {
              isAuthenticated: true,
              name: data.fullName,
              surname: data.fullName.split(" ")[1],
              email: data.email,
              phoneNumber: data.phoneNumber,
            },
            error: "",
          })
        );
      }

      // navigate("/");
    }
  };

  console.log(loading);

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ marginBottom: { xs: 5, sm: 10 } }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          User Registration
        </Typography>

        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.fullName.isError}
                  helperText={
                    errors.fullName.isError ? errors.fullName.message : null
                  }
                  autoComplete="fname"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  {...register("fullName")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.email.isError}
                  helperText={
                    errors.email.isError ? errors.email.message : null
                  }
                  autoComplete="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  error={errors.phoneNumber.isError}
                  helperText={
                    errors.phoneNumber.isError
                      ? errors.phoneNumber.message
                      : null
                  }
                  label="Phone Number"
                  required
                  {...register("phoneNumber")}
                  inputProps={{ maxLength: 16 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        error={errors.password.isError}
                        autoComplete="new-password"
                      />
                      {errors.password.isError && (
                        <Box sx={{ color: "red", fontSize: "14px" }}>
                          {errors.password.message}
                        </Box>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        id="confirm-password"
                        type={showPassword ? "text" : "password"}
                        {...register("confirmPassword")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Confirm Password"
                        error={errors.confirmPassword.isError}
                        autoComplete="new-password"
                      />
                      {errors.confirmPassword.isError && (
                        <Box sx={{ color: "red", fontSize: "14px" }}>
                          {errors.confirmPassword.message}
                        </Box>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        navigate("/register/volunteer");
                      }}
                    >
                      Register As Volunteer
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {loading
              ? ""
              : error && (
                  <Box sx={{ color: "red", fontSize: "14px" }}>{error}</Box>
                )}

            <Box
              component="div"
              style={{ position: "relative", width: "100%" }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Register"
                )}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;