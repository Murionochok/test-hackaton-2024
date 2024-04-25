import { Box } from "@mui/material";
import { UserBasedCardsData } from "../../interfaces/UserInterfaces";

import styles from "./RequestCard.module.scss";

export default function RequestCard({
  id,
  title,
  description,
}: UserBasedCardsData) {
  return (
    <Box className={styles.Box}>
      <Box className={styles.Id_Container}>#{id}</Box>
      <Box className={styles.Title_Container}>{title}</Box>
      <Box className={styles.Description_Container}>{description}</Box>
    </Box>
  );
}
