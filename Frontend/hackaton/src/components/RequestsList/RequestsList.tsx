import { Box } from "@mui/material";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";
import RequestCard from "../RequestCard/RequestCard";
import { Link } from "react-router-dom";

interface linkPath {
  linkPath: string;
}
// /volunteer/id/requests/
export default function RequestsView({ linkPath }: linkPath) {
  return (
    <Box>
      {testData.map((card) => (
        <Link to={`${linkPath}${card.id}`}>
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
  );
}
