import { Box, Button } from "@mui/material";
import Request from "../Request/Request";

export default function VolunteerRequest() {
  return (
    <Box>
      <Request>
        <Button variant="contained">Apply</Button>
      </Request>
    </Box>
  );
}
