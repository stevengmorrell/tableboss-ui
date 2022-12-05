import { Box, Typography } from "@mui/material";
import React from "react";
import LinearWithValueLabel from "../LinearWithValueLabel/LinearWithValueLabel";

const Secondaries = ({ sec1, sec2, sec3 }) => {
  return (
    <Box sx={{ color: "#FFFFFF" }}>
      <Typography variant='h5'>SECONDARIES</Typography>
      <LinearWithValueLabel secondary={sec1} value={5} />
      <LinearWithValueLabel secondary={sec2} value={10} />
      <LinearWithValueLabel secondary={sec3} value={15} />
    </Box>
  );
};

export default Secondaries;
