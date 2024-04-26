import { Box, Button } from "@mui/material";

import styles from "./UserWorkTable.module.scss";
import { UserBasedCardsData } from "../../interfaces/UserInterfaces";
import RequestCard from "../../components/RequestCard/RequestCard";

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
    <Box className={styles.Box} component="main">
      <Box className={styles.Button_Container}>
        <Button variant="contained">Create Request</Button>
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
