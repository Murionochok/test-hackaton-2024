import { Box, Button } from "@mui/material";
import Request from "../Request/Request";
import { Link } from "react-router-dom";
export default function VolunteerRequest() {
  return (
    <Box>
      <Request>
        <Link to="/admin/requests">
          <Button variant="contained">Confirm</Button>
        </Link>
        <Link to="/admin/requests">
          <Button variant="contained">Reject</Button>
        </Link>
      </Request>
    </Box>
  );
}
