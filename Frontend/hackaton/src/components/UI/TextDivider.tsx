import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const TextDivider = ({ text }: { text: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
      <Divider style={{ flexGrow: 1 }} />
      <Typography variant="body1" style={{ margin: "0 10px" }}>
        {text}
      </Typography>
      <Divider style={{ flexGrow: 1 }} />
    </div>
  );
};

export default TextDivider;
