import { Grid, TextField } from "@mui/material";

import styles from "./UserCreateRequestForm.module.scss";

export default function UserRequestForm() {
  return (
    <form className={styles.Box}>
      <Grid className={styles.form}>
        <Grid container spacing={4}>
          <Grid item>
            <TextField id="name" label="Name" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="surname" label="Surname" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item>
            <TextField id="surname" label="Title" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="surname" label="Address" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField id="surname" label="Gmail" variant="outlined" />
          </Grid>
          <Grid item>
            <TextField
              id="surname"
              label="Description"
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item>
            <TextField id="surname" label="Term" variant="outlined" />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
