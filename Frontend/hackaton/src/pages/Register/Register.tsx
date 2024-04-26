import { FormEvent, useRef, useState } from "react";
import Box from "@mui/material/Box";

import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormRegisterValidation } from "../../utils/hooks/useFormRegisterValidation";
import { useLocation, useNavigate } from "react-router-dom";
import { FormData } from "../../interfaces/UserInterfaces";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //   const [isPostError, setIsPostError] = useState({ error: false, message: "" });
  //   const [isSending, setIsSending] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

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
      firstName:
        firstNameRef.current && "value" in firstNameRef.current
          ? (firstNameRef.current as HTMLInputElement).value
          : "",
      lastName:
        lastNameRef.current && "value" in lastNameRef.current
          ? (lastNameRef.current as HTMLInputElement).value
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
      //   setIsSending(true);
      // const response = await postRegisterUserData(formDataObj)
      // if (response) {
      //   setIsSending(false)
      //   setIsPostError(() => {
      //     return {
      //       error: true,
      //       message: response,
      //     }
      //   })
      //   return
      // }
      //   setIsSending(false);

      const pathToOrg = `${location.pathname}/org`;
      navigate(pathToOrg);
    } else {
      console.log("validation failed!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box component="div" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.firstName.isError}
                  helperText={
                    errors.firstName.isError ? errors.firstName.message : null
                  }
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  inputRef={firstNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.lastName.isError}
                  helperText={
                    errors.lastName.isError ? errors.lastName.message : null
                  }
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  inputRef={lastNameRef}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  error={errors.phoneNumber.isError}
                  helperText={
                    errors.phoneNumber.isError
                      ? errors.phoneNumber.message
                      : null
                  }
                  required
                  placeholder="Enter phone number"
                  inputRef={phoneNumberRef}
                  inputProps={{ maxLength: 16 }}
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
              <Grid item xs={12}>
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
                          {showPassword ? <VisibilityOff /> : <Visibility />}
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
