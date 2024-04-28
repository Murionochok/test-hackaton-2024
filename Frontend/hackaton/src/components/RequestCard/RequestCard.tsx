import { Box } from "@mui/material";
import { UserRequestData } from "../../interfaces/UserInterfaces";

import styles from "./RequestCard.module.scss";

export default function RequestCard(props: UserRequestData) {
  return (
    <Box className={styles.Box}>
      <Box className={styles.Id_Container}>#{props.id}</Box>
      <Box className={styles.Title_Container}>Title:{props.title}</Box>
      <Box className={styles.Id_Container}>Address:{props.address}</Box>
      <Box className={styles.Id_Container}>Date:{props.date}</Box>
      <Box className={styles.Id_Container}>Tag:{props.tag}</Box>
      <h3>State: {props.state}</h3>
    </Box>
  );
}
