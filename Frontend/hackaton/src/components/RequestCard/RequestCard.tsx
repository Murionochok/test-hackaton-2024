import { Box } from "@mui/material";
import { UserRequestData } from "../../interfaces/UserInterfaces";

import styles from "./RequestCard.module.scss";

export default function RequestCard({
  id,
  title,
  address,
  date,
  tag,
  description,
}: UserRequestData) {
  return (
    <Box className={styles.Box}>
      <Box className={styles.Id_Container}>#{id}</Box>
      <Box className={styles.Title_Container}>Title:{title}</Box>
      <Box className={styles.Id_Container}>Address:{address}</Box>
      <Box className={styles.Id_Container}>Date:{date}</Box>
      <Box className={styles.Id_Container}>Tag:{tag}</Box>
      <Box className={styles.Description_Container}>
        Description:{description}
      </Box>
    </Box>
  );
}
