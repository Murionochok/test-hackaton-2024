import {
  FormControl,
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Button,
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
    };
    testData.push(formDataObject);
    console.log(formDataObject);
  };

  return (
    <form className={styles.Box}>
      <Box className={styles.form}>
        <Box className={styles.base}>
          <Box className={styles.Title}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              inputRef={titleRef}
            />
          </Box>
          <Box className={styles.level1}>
            <Box className={styles.Address}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                inputRef={addressRef}
              />
            </Box>
            <Box className={styles.Term}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Term" inputRef={dateRef} />
              </LocalizationProvider>
            </Box>
            <Box className={styles.Tag}>
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
                  <MenuItem value="military">Military</MenuItem>
                  <MenuItem value="grocery">Grocery</MenuItem>
                  <MenuItem value="staff">Staff</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box className={styles.Description}>
            <TextField
              fullWidth
              label="Detailed description"
              required
              multiline
              rows={7}
              inputRef={descriptionRef}
            />
          </Box>
          <Link to="/requests">
            <Button
              variant="contained"
              className={styles.Submit}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Link>
        </Box>
      </Box>
    </form>
  );
}
