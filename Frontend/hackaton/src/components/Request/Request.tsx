import { Box, TextField } from "@mui/material";

import styles from "./Request.module.scss";
import { useParams } from "react-router-dom";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";

type ButtonProps = {
  children?: JSX.Element[] | JSX.Element;
};

export default function Request({ children }: ButtonProps) {
  const { id } = useParams();
  console.log(children);
  const [currObj] = testData.filter((item) => item.id == Number(id));
  return (
    <form className={styles.Box}>
      <Box className={styles.form}>
        <Box className={styles.base}>
          <h1 className={styles.id}>#{currObj.id}</h1>
          <Box className={styles.Title}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              value={currObj.title}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
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
            <Box className={styles.Tag}>
              <TextField
                id="tag"
                label="Tag"
                variant="outlined"
                value={currObj.tag}
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
          <Box className={styles.level1}>
            <Box className={styles.Address}>
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                value={currObj.address}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box className={styles.Date}>
              <TextField
                id="date"
                label="Date"
                variant="outlined"
                value={currObj.date}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Box>
          <Box className={styles.Description}>
            <TextField
              fullWidth
              label="Detailed description"
              required
              multiline
              rows={7}
              value={currObj.description}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <h3>Publication date: {currObj.publicationDate}</h3>
          {children}
        </Box>
      </Box>
    </form>
  );
}
