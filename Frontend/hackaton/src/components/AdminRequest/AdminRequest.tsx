import { Box, Button } from "@mui/material";
import Request from "../Request/Request";
export default function VolunteerRequest() {
  return (
    <Box>
      <Request>
        <Button variant="contained">Confirm</Button>
        <Button variant="contained">Reject</Button>
      </Request>
    </Box>
  );
}
