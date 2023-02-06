import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { Backdrop } from "@mui/material";

import React from "react";

const Loader = ({ open }) => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Backdrop open={open} />
      <CircularProgress sx={{ margin: "auto", color: "white" }} />
    </Box>
  );
};

export default Loader;
