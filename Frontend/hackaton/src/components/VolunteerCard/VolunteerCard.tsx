import { Box } from "@mui/material";
import { testVolunteerData } from "../../interfaces/VolunteerInterfaces";

import styles from "./VolunteerCard.module.scss";
import { Link } from "react-router-dom";

export default function VolunteerCard(props: testVolunteerData) {
  return (
    <Box className={styles.Box}>
      <Box className={styles.Id_Container}>
        Name: {props.name} {props.surname}
      </Box>
      <Box className={styles.Title_Container}>Email: {props.email}</Box>
      <Box className={styles.Id_Container}>Phone: {props.phone}</Box>
      <Link to={props.linkToCV}>Resume</Link>
    </Box>
  );
}
