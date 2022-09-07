import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ReactComponent as BottomDiv } from "./BottomDiv.svg";
import { ReactComponent as TopDiv } from "./TopDiv.svg";

const Background = () => (
  <Box>
    <Box sx={{ mb: "-7px" }} component={TopDiv} />
    <Box component={BottomDiv} />
  </Box>
);

const NamePlate = ({ name, army }) => {
  return (
    <Box sx={{pt: '10px'}}>
      <Box component='span' sx={{ color: "#FFFFFF" }}>
        {name?.toUpperCase()}
      </Box>
      <Box sx={{ position: "relative" }}>
        <Background />
        <Box
          sx={{
            "font-size": "28px",
            "line-height": "34px",
            color: "#2B2B2D",
            position: "absolute",
            top: "7px",
            left: "10px",
          }}
          component='span'
        >
          {army?.toUpperCase()}
        </Box>
      </Box>
    </Box>
  );
};

NamePlate.propTypes = {
  name: PropTypes.string,
};

export default NamePlate;
