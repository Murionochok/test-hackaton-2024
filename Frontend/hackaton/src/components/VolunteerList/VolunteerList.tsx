import { Box } from "@mui/material";
import { testVolunteerData } from "../../interfaces/VolunteerInterfaces";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import { Link } from "react-router-dom";

export const testVolunteers: testVolunteerData[] = [
  {
    id: 1,
    name: "Ivan",
    surname: "Fedoniuk",
    email: "test@gmail.com",
    phone: "+380777777777",
    info: "Hello dear!",
    linkToCV: "drive.com/123/123.pdf",
  },
  {
    id: 2,
    name: "Ivan",
    surname: "Fedoniuk",
    email: "test@gmail.com",
    phone: "+380777777777",
    info: "Hello dear!",
    linkToCV: "drive.com/123/123.pdf",
  },
];

export default function VolunteerList() {
  return (
    <Box>
      {testVolunteers.map((vol) => (
        <Link to={`/admin/volunteers/${vol.id}`}>
          <VolunteerCard
            id={vol.id}
            name={vol.name}
            surname={vol.surname}
            email={vol.email}
            phone={vol.phone}
            info={vol.info}
            linkToCV={vol.linkToCV}
          />
        </Link>
      ))}
    </Box>
  );
}
