import { Box } from "@mui/material";

import RequestCard from "../../components/RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { testData } from "../UserWorkTable/UserWorkTable";

import styles from "./VolunteerWorkTable.module.scss";

export default function VolunteerWorkTable() {
  return (
    <Box className={styles.Box} component="main">
      <Box>
        {testData.map((card) => (
          <Link to={`/volunteer/id/requests/${card.id}`}>
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
