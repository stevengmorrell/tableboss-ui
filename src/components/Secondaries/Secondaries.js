import { Box, Typography } from "@mui/material";
import React from "react";
import LinearWithValueLabel from "../LinearWithValueLabel/LinearWithValueLabel";

const Secondaries = () => {
  const SecondaryBar = () => {
    return (
      <Box>
        <Typography>SECONDARY NAME</Typography>
        <LinearWithValueLabel />
      </Box>
    );
  };

  return (
    <Box sx={{ color: "#FFFFFF" }}>
      <Typography variant='h5'>SECONDARIES</Typography>
      <SecondaryBar />
      <SecondaryBar />
      <SecondaryBar />
      <br />
      <SecondaryBar />
      <SecondaryBar />
      <SecondaryBar />
    </Box>
  );
};

export default Secondaries;
