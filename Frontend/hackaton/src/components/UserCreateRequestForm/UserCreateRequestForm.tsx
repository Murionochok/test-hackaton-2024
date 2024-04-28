import {
  FormControl,
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Button,
  Grid,
  Container,
  FormHelperText,
} from "@mui/material";

import styles from "./UserCreateRequestForm.module.scss";
import { useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  UserCreateRequestData,
  UserRequestData,
} from "../../interfaces/UserInterfaces";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";
import { Link, useNavigate } from "react-router-dom";
import { useFormRequestValidation } from "../../utils/hooks/useFormRequestValidation";
import { useForm } from "react-hook-form";

export default function UserRequestForm() {
  const termRef = useRef();
  const initialFormData: UserCreateRequestData = {
    title: "",
    address: "",
    term: "",
    tag: "",
    description: "",
  };

  const { setFormData, errors, validateForm } =
    useFormRequestValidation(initialFormData);

  const { register, handleSubmit } = useForm();
  const handleSubmitForm = async (data: UserCreateRequestData) => {
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
    testData.push(pushed);

    if (validation) {
      setFormData(data);
      navigate("/user/id/requests");
    }
  };

  // const [tag, setTag] = useState("");

  // const titleRef = useRef(null);
  // const addressRef = useRef(null);
  // const dateRef = useRef(null);
  // const descriptionRef = useRef(null);

  const navigate = useNavigate();

  // const handleSubmit = () => {
  //   const formDataObject: UserRequestData = {
  //     id: Date.now(),
  //     title:
  //       titleRef.current && "value" in titleRef.current
  //         ? (titleRef.current as HTMLInputElement).value
  //         : "",
  //     name: "Ivan",
  //     surname: "Fedoniuk",
  //     email: "test@gmail.com",
  //     phone: "+380222222222",
  //     publicationDate: "27.04.2024",
  //     address:
  //       addressRef.current && "value" in addressRef.current
  //         ? (addressRef.current as HTMLInputElement).value
  //         : "",
  //     date:
  //       dateRef.current && "value" in dateRef.current
  //         ? (dateRef.current as HTMLInputElement).value
  //         : "",
  //     tag: tag,
  //     description:
  //       descriptionRef.current && "value" in descriptionRef.current
  //         ? (descriptionRef.current as HTMLInputElement).value
  //         : "",
  //     state: "sent",
  //   };
  //   testData.push(formDataObject);
  //   console.log(formDataObject);
  //   navigate("/user/id/requests");
  // };

  return (
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
                helperText={errors.title.isError ? errors.title.message : null}
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
                    helpertext={errors.tag.isError ? errors.tag.message : null}
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
                  errors.description.isError ? errors.description.message : null
                }
                {...register("description")}
              />
            </Grid>
            <Grid item className={styles.Submit}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
}
