import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RoundPlate = ({ currentRound, missionName }) => {
  return (
    <Box sx={{ color: "#FFFFFF" }}>
      <Typography>Round {currentRound}/5</Typography>
      <Typography>{missionName}</Typography>
    </Box>
  );
};

export default RoundPlate;
