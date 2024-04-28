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
} from "@mui/material";

import styles from "./UserCreateRequestForm.module.scss";
import { useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { UserRequestData } from "../../interfaces/UserInterfaces";
import { Link } from "react-router-dom";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";

export default function UserRequestForm() {
  const [tag, setTag] = useState("");

  const titleRef = useRef(null);
  const addressRef = useRef(null);
  const dateRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = () => {
    const formDataObject: UserRequestData = {
      id: Date.now(),
      title:
        titleRef.current && "value" in titleRef.current
          ? (titleRef.current as HTMLInputElement).value
          : "",
      name: "Ivan",
      surname: "Fedoniuk",
      email: "test@gmail.com",
      phone: "+380222222222",
      publicationDate: "27.04.2024",
      address:
        addressRef.current && "value" in addressRef.current
          ? (addressRef.current as HTMLInputElement).value
          : "",
      date:
        dateRef.current && "value" in dateRef.current
          ? (dateRef.current as HTMLInputElement).value
          : "",
      tag: tag,
      description:
        descriptionRef.current && "value" in descriptionRef.current
          ? (descriptionRef.current as HTMLInputElement).value
          : "",
      state: "sent",
    };
    testData.push(formDataObject);
    console.log(formDataObject);
  };

  return (
    <Container>
      <form className={styles.Box}>
        <Box className={styles.form}>
          <Grid container spacing={1} className={styles.base}>
            <Grid item className={styles.Title}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                inputRef={titleRef}
              />
            </Grid>
            <Grid item className={styles.level1}>
              <Grid item className={styles.Address}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  inputRef={addressRef}
                />
              </Grid>
              <Grid item className={styles.Term}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Term" inputRef={dateRef} />
                </LocalizationProvider>
              </Grid>
              <Grid item className={styles.Tag}>
                <FormControl className={styles.FormControl}>
                  <InputLabel id="tag-label">Tag</InputLabel>
                  <Select
                    id="tag-select"
                    label="Tag"
                    value={tag}
                    onChange={(event: SelectChangeEvent) => {
                      setTag(event.target.value as string);
                    }}
                  >
                    <MenuItem value="Military">Military</MenuItem>
                    <MenuItem value="Grocery">Grocery</MenuItem>
                    <MenuItem value="Staff">Staff</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item className={styles.Description}>
              <TextField
                fullWidth
                label="Detailed description"
                required
                multiline
                rows={7}
                inputRef={descriptionRef}
              />
            </Grid>
            <Grid item className={styles.Submit}>
              <Link to="/user/id/requests">
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
}
