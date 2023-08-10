import React from "react";

import { UserIcon } from "./UserIcon";
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", padding: "20px" }}
    >
      <h1>Users List</h1>
      <UserIcon />
    </Box>
  );
};
