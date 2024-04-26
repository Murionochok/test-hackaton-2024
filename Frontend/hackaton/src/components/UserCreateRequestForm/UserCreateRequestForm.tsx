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
import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function UserRequestForm() {
  const [tag, setTag] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTag(event.target.value);
  };
  return (
    <form className={styles.Box}>
      <Box className={styles.form}>
        <Box className={styles.base}>
          <Box className={styles.Title}>
            <TextField id="title" label="Title" variant="outlined" />
          </Box>
          <Box className={styles.level1}>
            <Box className={styles.Address}>
              <TextField id="address" label="Address" variant="outlined" />
            </Box>
            <Box className={styles.Term}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Term" />
              </LocalizationProvider>
            </Box>
            <Box className={styles.Tag}>
              <FormControl className={styles.FormControl}>
                <InputLabel id="tag-label">Tag</InputLabel>
                <Select
                  id="tag-select"
                  value={tag}
                  label="Tag"
                  onChange={handleChange}
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
            />
          </Box>
          <Button variant="contained" className={styles.Submit}>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}
