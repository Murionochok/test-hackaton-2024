import { Box, Button } from "@mui/material";

import styles from "./UserWorkTable.module.scss";
import { UserRequestData } from "../../interfaces/UserInterfaces";
import RequestCard from "../../components/RequestCard/RequestCard";
import { Link } from "react-router-dom";

export const testData: UserRequestData[] = [
  {
    id: 1,
    name: "Ivan",
    surname: "Fedoniuk",
    email: "test@gmail.com",
    phone: "+380222222222",
    publicationDate: "27.04.2024",
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
    publicationDate: "27.04.2024",
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
      <Box>
        {testData.map((card) => (
          <Link to={`user/id/requests/${card.id}`}>
            <RequestCard
              key={card.id}
              id={card.id}
              name={card.name}
              surname={card.surname}
              email={card.email}
              phone={card.phone}
              publicationDate={card.publicationDate}
              title={card.title}
              address={card.address}
              date={card.date}
              tag={card.tag}
              description={card.description}
              state={card.state}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
