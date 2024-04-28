import {
  FormControl,
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Grid,
  Container,
  FormHelperText,
  CircularProgress,
} from "@mui/material";

import styles from "./UserCreateRequestForm.module.scss";
import { useRef } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LoginFormData,
  UserCreateRequestData,
} from "../../interfaces/UserInterfaces";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";
import { useNavigate } from "react-router-dom";
import { useFormRequestValidation } from "../../utils/hooks/useFormRequestValidation";
import { useForm } from "react-hook-form";
import { useModal } from "../Modal/utils/Modal";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../store/request/request-slice";
import { ReduxInterface } from "../../store";

export default function UserRequestForm() {
  const { openConfirmModal } = useModal();
  const termRef = useRef();
  const initialFormData: UserCreateRequestData = {
    title: "",
    address: "",
    term: "",
    tag: "",
    description: "",
  };

  const { formData, setFormData, errors, validateForm } =
    useFormRequestValidation(initialFormData);
  const navigate = useNavigate();
  const fetching = useSelector(
    (state: ReduxInterface) => state.requests.fetching
  );
  const error = useSelector((state: ReduxInterface) => state.requests.error);

  const { register, handleSubmit } = useForm();

  const dispatchReq: ThunkDispatch<
    UserCreateRequestData,
    undefined,
    AnyAction
  > = useDispatch();

  const handleSubmitForm = (data: UserCreateRequestData) => {
    const finData = {
      ...data,
      term: (termRef.current as unknown as HTMLInputElement).value,
    };
    const validation = validateForm(finData);
    console.log(finData);
    const pushed = {
      ...finData,
      id: Date.now(),
      name: "Ivan",
      surname: "Fedoniuk",
      email: "test@gmail.com",
      phone: "+380222222222",
      state: "sent",
    };
    // testData.push(pushed);
    if (validation) {
      setFormData(data);
      openConfirmModal();
    }
  };

  const handleConfirmSubmitForm = async () => {
    //handle POST request
    const response = await dispatchReq(createRequest(formData));
    if (response) {
      navigate("/user/id/requests");
    }
  };

  return (
    <>
      <ConfirmModal
        title="Create Request"
        onConfirm={handleConfirmSubmitForm}
      />
      <Container>
        <form className={styles.Box} onSubmit={handleSubmit(handleSubmitForm)}>
          <Box className={styles.form}>
            <Grid container spacing={1} className={styles.base}>
              <Grid item className={styles.Title}>
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  error={errors.title.isError}
                  helperText={
                    errors.title.isError ? errors.title.message : null
                  }
                  {...register("title")}
                />
              </Grid>
              <Grid item className={styles.level1}>
                <Grid item className={styles.Address}>
                  <TextField
                    id="address"
                    label="Address"
                    variant="outlined"
                    error={errors.address.isError}
                    helperText={
                      errors.address.isError ? errors.address.message : null
                    }
                    {...register("address")}
                  />
                </Grid>
                <Grid
                  item
                  className={errors.term.isError ? styles.error : styles.Term}
                >
                  <FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker id="term" label="Term" inputRef={termRef} />
                    </LocalizationProvider>
                    {errors.term.isError && (
                      <FormHelperText
                        htmlFor="form-selector"
                        error={!!errors.term.isError}
                      >
                        {errors.term.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item className={styles.Tag}>
                  <FormControl className={styles.FormControl}>
                    <InputLabel id="tag-label">Tag</InputLabel>
                    <Select
                      id="tag"
                      label="Tag"
                      error={errors.tag.isError}
                      helpertext={
                        errors.tag.isError ? errors.tag.message : null
                      }
                      {...register("tag")}
                    >
                      <MenuItem value="Military">Military</MenuItem>
                      <MenuItem value="Grocery">Grocery</MenuItem>
                      <MenuItem value="Staff">Staff</MenuItem>
                    </Select>
                    {errors.tag.isError && (
                      <FormHelperText
                        htmlFor="form-selector"
                        error={!!errors.tag.isError}
                      >
                        {errors.tag.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item className={styles.Description}>
                <TextField
                  fullWidth
                  label="Detailed description"
                  multiline
                  rows={7}
                  error={errors.description.isError}
                  helperText={
                    errors.description.isError
                      ? errors.description.message
                      : null
                  }
                  {...register("description")}
                />
              </Grid>
              <Grid item xs={12}>
                {fetching
                  ? ""
                  : error && (
                      <Box sx={{ color: "red", fontSize: "14px" }}>{error}</Box>
                    )}
              </Grid>
              <Grid item className={styles.Submit}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={fetching}
                  sx={{ mt: 2 }}
                >
                  {fetching ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </>
  );
}
