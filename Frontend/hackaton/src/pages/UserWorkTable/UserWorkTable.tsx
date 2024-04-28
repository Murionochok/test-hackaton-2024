import { Box, Button } from "@mui/material";

import styles from "./UserWorkTable.module.scss";
import { UserRequestData } from "../../interfaces/UserInterfaces";
import { Link } from "react-router-dom";
import RequestsView from "../../components/RequestsList/RequestsList";

export const testData: UserRequestData[] = [
  {
    id: 1,
    name: "Ivan",
    surname: "Fedoniuk",
    email: "test@gmail.com",
    phone: "+380222222222",
    title: "Drones_1",
    address: "Bandera",
    date: "23/23/2024",
    tag: "Military",
    description: "We are making drones and need money for details.",
    state: "sent",
  },
  {
    id: 2,
    name: "Ivan",
    surname: "Fedoniuk",
    email: "test@gmail.com",
    phone: "+380222222222",
    title: "Drones_1",
    address: "Bandera",
    date: "23/23/2024",
    tag: "Military",
    description: "We are making drones and need money for details.",
    state: "sent",
  },
];

export default function UserWorkTable() {
  return (
    <Box className={styles.Box} component="main">
      <Box className={styles.Button_Container}>
        <Link to="/user/id/create_card">
          <Button variant="contained">Create Request</Button>
        </Link>
      </Box>
      <RequestsView linkPath="/user/id/requests/" />
    </Box>
  );
}
