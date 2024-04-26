import { Box, Button } from "@mui/material";

import styles from "./UserWorkTable.module.scss";
import { UserBasedCardsData } from "../../interfaces/UserInterfaces";
import RequestCard from "../../components/RequestCard/RequestCard";
import { Link } from "react-router-dom";

const testData: UserBasedCardsData[] = [
  {
    id: 1,
    title: "Drones_1",
    description: "We are making drones and need money for details.",
  },
  {
    id: 2,
    title: "Drones_2",
    description: "We are making drones and need money for details.",
  },
];

export default function UserWorkTable() {
  return (
    <Box className={styles.Box}>
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
            description={card.description}
          />
        ))}
      </Box>
    </Box>
  );
}
