import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const NamePlate = ({ name, army }) => {
  return (
    <Box>
      <Box component="span" sx={{ color: "#FFFFFF" }}>{name}</Box>
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
