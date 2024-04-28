import { Box, Button, TextField } from "@mui/material";

import styles from "./Volunteer.module.scss";
import { testVolunteers } from "../VolunteerList/VolunteerList";
import { useParams } from "react-router-dom";
import ConfirmModal from "../Modal/ConfirmModal/ConfirmModal";
import { useModal } from "../Modal/utils/Modal";

export default function Volunteer() {
  const { openConfirmModal } = useModal();
  const { id } = useParams();
  const [currObj] = testVolunteers.filter((item) => item.id == Number(id));

  const handleConfirmModal = (event) => {
    event.preventDefault();
    openConfirmModal();
  };

  const handleApproveForm = () => {
    // handle POST request (APPROVE)
    //navigate
  };
  return (
    <>
      <ConfirmModal title="Approve Request" onConfirm={handleApproveForm} />
      <form className={styles.Box} onSubmit={handleConfirmModal}>
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

            <Button variant="contained" type="submit">
              Approve
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
