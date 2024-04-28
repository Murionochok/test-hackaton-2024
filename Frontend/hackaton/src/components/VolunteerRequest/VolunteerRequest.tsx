import { Box, Button } from "@mui/material";
import Request from "../Request/Request";
import { Link } from "react-router-dom";

export default function VolunteerRequest() {
  return (
    <Box>
      <Request>
        <Link to="/volunteer/id/requests">
          <Button variant="contained">Apply</Button>
        </Link>
      </Request>
    </Box>
  );
}
