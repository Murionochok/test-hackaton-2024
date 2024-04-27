import { Box, Button, TextField } from "@mui/material";

import styles from "./Volunteer.module.scss";
import { testVolunteers } from "../VolunteerList/VolunteerList";
import { useParams } from "react-router-dom";

export default function Volunteer() {
  const { id } = useParams();
  const [currObj] = testVolunteers.filter((item) => item.id == Number(id));
  return (
    <form className={styles.Box}>
      <Box className={styles.form}>
        <Box className={styles.base}>
          <h1 className={styles.id}>#{currObj.id}</h1>
          <Box className={styles.level1}>
            <Box className={styles.Name}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={currObj.name}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box className={styles.Surname}>
              <TextField
                id="surname"
                label="Surname"
                variant="outlined"
                value={currObj.surname}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
          <Box className={styles.level1}>
            <Box className={styles.Email}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={currObj.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box className={styles.Phone}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                value={currObj.phone}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
          <Box className={styles.Info}>
            <TextField
              fullWidth
              label="Info"
              required
              multiline
              rows={7}
              value={currObj.info}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box className={styles.link}>
            <h1>
              Link to CV: <a href={`${currObj.linkToCV}`}>Link</a>
            </h1>
          </Box>
          <Button variant="contained">Approve</Button>
        </Box>
      </Box>
    </form>
  );
}
