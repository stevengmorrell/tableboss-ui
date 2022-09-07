import { Box, Typography } from "@mui/material";
import React from "react";
import LinearWithValueLabel from "../LinearWithValueLabel/LinearWithValueLabel";

const Secondaries = ({ p1Sec1, p1Sec2, p1Sec3 }) => {
  const SecondaryBar = ({ secondary }) => {
    return (
      <Box>
        <Typography>{secondary?.name}</Typography>
        <LinearWithValueLabel />
      </Box>
    );
  };

  return (
    <Box sx={{ color: "#FFFFFF" }}>
      <Typography variant='h5'>SECONDARIES</Typography>
      <SecondaryBar secondary={p1Sec1} />
      <SecondaryBar secondary={p1Sec2} />
      <SecondaryBar secondary={p1Sec3} />
      <br />
      <SecondaryBar />
      <SecondaryBar />
      <SecondaryBar />
    </Box>
  );
};

export default Secondaries;
