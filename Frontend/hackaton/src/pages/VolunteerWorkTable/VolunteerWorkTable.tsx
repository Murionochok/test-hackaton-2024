import { Box } from "@mui/material";
import RequestsList from "../../components/RequestsList/RequestsList";

export default function VolunteerWorkTable() {
  return (
    <Box component="main">
      <RequestsList linkPath="/volunteer/id/requests/" />
    </Box>
  );
}
