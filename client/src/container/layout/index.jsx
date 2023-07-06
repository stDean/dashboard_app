import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { UseSelector } from "react-redux";

import { NavBar } from "components";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        {/* outlets basically nested routes component */}
        <Outlet />
      </Box>
    </Box>
  )
};

export default Layout;
