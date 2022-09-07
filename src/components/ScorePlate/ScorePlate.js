import React from "react";
import { Box } from "@mui/system";
import placeholderImage from "./placeholder-human.jpg";
import { Typography } from "@mui/material";

const ScorePlate = ({ commandPoints }) => {
  const Dot = (colour) => (
    <Box
      component='span'
      sx={{
        height: "15px",
        width: "15px",
        "border-radius": "50%",
        "background-color": "#39AAC4",
        display: "inline-block",
        "margin-right": "3px",
      }}
    ></Box>
  );
  const cps = [];

  const CommandPoints = () => {
    for (let i = 0; i < commandPoints; i++) {
      cps.push(<Dot />);
    }
    for (let i = 0; i < 15 - commandPoints; i++) {
      cps.push(<Dot />);
    }
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant={"subtitle1"}>Command Points</Typography>
        {cps}
      </Box>
    );
  };

  return (
    <Box sx={{ color: "#FFFFFF" }}>
      <Box
        sx={{
          display: "flex",
          "justify-content": "space-between",
        }}
      >
        <img src={placeholderImage} alt='' width='105px' />
        <Box
          component='span'
          sx={{
            "font-size": "14px",
            "line-height": "17px",
          }}
        >
          Score
        </Box>
        <Box
          component='span'
          sx={{
            "font-size": "80px",
            "line-height": "97px",
          }}
        >
          100
        </Box>
      </Box>
      <CommandPoints />
    </Box>
  );
};

export default ScorePlate;
