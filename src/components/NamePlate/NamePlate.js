import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ReactComponent as BottomDiv } from "./BottomDiv.svg";
import { ReactComponent as TopDiv } from "./TopDiv.svg";

const NamePlate = ({ name, army }) => {
  return (
    <Box >
      <Box
      >
        <Box sx={{mb: '-7px'}} component={TopDiv} />
        <BottomDiv />
      </Box>
      <Box component='span' sx={{ color: "#FFFFFF" }}>
        {name}
      </Box>
      <Box sx={{ background: "#EDEDED" }}>
        <span>{army}</span>
      </Box>
    </Box>
  );
};

NamePlate.propTypes = {
  name: PropTypes.string,
};

export default NamePlate;
