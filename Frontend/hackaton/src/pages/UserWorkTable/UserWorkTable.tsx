import { Box, Button } from "@mui/material";

import styles from "./UserWorkTable.module.scss";
import { UserRequestData } from "../../interfaces/UserInterfaces";
import RequestCard from "../../components/RequestCard/RequestCard";
import { Link } from "react-router-dom";

export const testData: UserRequestData[] = [
  {
    id: 1,
    title: "Drones_1",
    address: "Bandera",
    date: "23/23/2024",
    tag: "Military",
    description: "We are making drones and need money for details.",
  },
  {
    id: 2,
    title: "Drones_1",
    address: "Bandera",
    date: "23/23/2024",
    tag: "Military",
    description: "We are making drones and need money for details.",
  },
];

export default function UserWorkTable() {
  return (
    <Box className={styles.Box} component="main">
      <Box className={styles.Button_Container}>
        <Link to="/user/create_card">
          <Button variant="contained">Create Request</Button>
        </Link>
      </Box>
      <Box>
        {testData.map((card) => (
          <RequestCard
            key={card.id}
            id={card.id}
            title={card.title}
            address={card.address}
            date={card.date}
            tag={card.tag}
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
}
