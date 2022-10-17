import React from "react";
import { Box } from "@mui/system";
import placeholderImage from "./placeholder-human.jpg";
import { Typography } from "@mui/material";

const ScorePlate = ({ score, commandPoints }) => {
  const Dot = () => (
    <Box
      component='span'
      sx={{
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        backgroundColor: "#39AAC4",
        display: "inline-block",
        marginRight: "3px",
      }}
    ></Box>
  );
  const EmptyDot = () => (
    <Box
      component='span'
      sx={{
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        backgroundColor: "#B2B2B2",
        display: "inline-block",
        marginRight: "3px",
      }}
    ></Box>
  );
  const cps = [];

  const CommandPoints = () => {
    for (let i = 0; i < commandPoints; i++) {
      cps.push(<Dot key={i} />);
    }
    for (let i = 0; i < 15 - commandPoints; i++) {
      cps.push(<EmptyDot key={i + 100} />);
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
          justifyContent: "space-between",
        }}
      >
        <img src={placeholderImage} alt='' width='105px' />
        <Box
          component='span'
          sx={{
            fontSize: "14px",
            lineHeight: "17px",
          }}
        >
          Score
        </Box>
        <Box
          component='span'
          sx={{
            fontSize: "80px",
            lineHeight: "97px",
          }}
        >
          {score}
        </Box>
      </Box>
      <CommandPoints />
    </Box>
  );
};

export default ScorePlate;
