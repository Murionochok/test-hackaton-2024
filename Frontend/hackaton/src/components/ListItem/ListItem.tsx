import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";

interface listItem {
  title: string;
}

export default function ListItem({ title }: listItem) {
  return (
    <Box>
      <Link to={"/admin/" + title}>
        <ListItemButton>
          <ListItemText primary={title} />
          {/* <Menu option={'task'} /> */}
          {/* <ListOptions id={titleID} /> */}
        </ListItemButton>
      </Link>
    </Box>
  );
}
