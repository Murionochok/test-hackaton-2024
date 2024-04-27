import { Box } from "@mui/material";
import RequestsView from "../RequestsList/RequestsList";

export default function AdminRequests() {
  return (
    <Box>
      <RequestsView linkPath="/admin/requests/" />
    </Box>
  );
}
