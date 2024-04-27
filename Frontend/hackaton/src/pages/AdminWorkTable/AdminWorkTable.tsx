import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./AdminWorkTable.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminWorkTable() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Requests", "Volunteers"].map((text) => (
          <Link to={`/admin/${text.toLocaleLowerCase()}`}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <Box className={styles.main}>
      <Box className={styles.btn}>
        <Button onClick={toggleDrawer(true)} variant="contained">
          Open Side bar
        </Button>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
