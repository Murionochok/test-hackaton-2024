import { FormEvent, useRef, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { UserFormData } from "../../../interfaces/UserInterfaces";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/user/user-slice";

const Register = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //   const [isPostError, setIsPostError] = useState({ error: false, message: "" });
  //   const [isSending, setIsSending] = useState(false);
  const fullNameRef = useRef();

  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const initialFormData: UserFormData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();

  const { setFormData, errors, validateForm } =
    useFormRegisterValidation(initialFormData);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataObj = {
      fullName:
        fullNameRef.current && "value" in fullNameRef.current
          ? (fullNameRef.current as HTMLInputElement).value
          : "",
      email:
        emailRef.current && "value" in emailRef.current
          ? (emailRef.current as HTMLInputElement).value
          : "",
      phoneNumber:
        phoneNumberRef.current && "value" in phoneNumberRef.current
          ? (phoneNumberRef.current as HTMLInputElement).value
          : "",
      password:
        passwordRef.current && "value" in passwordRef.current
          ? (passwordRef.current as HTMLInputElement).value
          : "",
      confirmPassword:
        confirmPasswordRef.current && "value" in confirmPasswordRef.current
          ? (confirmPasswordRef.current as HTMLInputElement).value
          : "",
    };

    const validation = validateForm(formDataObj);

    if (validation) {
      setFormData(formDataObj);
      // setIsSending(true);
      // const response = await postRegisterUserData(formDataObj);
      // if (response) {
      //   setIsSending(false);
      //   setIsPostError(() => {
      //     return {
      //       error: true,
      //       message: response,
      //     };
      //   });
      //   return;
      // }
      // setIsSending(false);
      dispatch(userActions.userState({
        isAuthenticated: true,
        name: formDataObj.fullName.split(" ")[0],
        surname: formDataObj.fullName.split(" ")[1],
        email: formDataObj.email,
        phoneNumber: formDataObj.phoneNumber,
      }))
      // const pathToOrg = `${location.pathname}/org`;
      navigate('/');
    } else {
      console.log("validation failed!");
    }
  };
  return (
    <Container
      component="main"
      maxWidth="sm"
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
          User Registration
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.fullName.isError}
                  helperText={
                    errors.fullName.isError ? errors.fullName.message : null
                  }
                  autoComplete="fname"
                  name="FullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  inputRef={fullNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.email.isError}
                  helperText={
                    errors.email.isError ? errors.email.message : null
                  }
                  autoComplete="email"
                  name="Email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  inputRef={emailRef}
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
                  inputRef={phoneNumberRef}
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
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end">
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
                        inputRef={passwordRef}
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
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end">
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
                        inputRef={confirmPasswordRef}
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
                      }}>
                      Register As Volunteer
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        navigate("/login");
                      }}>
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* {isSending
                ? ""
                : isPostError.error && (
                    <Box sx={{ color: "red", fontSize: "14px" }}>
                      {isPostError.message}
                    </Box>
                  )} */}

            <Box
              component="div"
              style={{ position: "relative", width: "100%" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                //   disabled={isSending}
                sx={{ mt: 2 }}>
                {/* {isSending ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Next"
                  )} */}
                Register
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
