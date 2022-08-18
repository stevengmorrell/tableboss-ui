import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { blueGrey } from "@mui/material/colors";

const NamePlate = ({ name, army }) => {
  return (
    <Box>
      <Box component="span" sx={{ color: "#FFFFFF" }}>
        {name}
      </Box>
      <Box
        display="flex"
        justifyContent="left"
        alignItems="center"
        paddingLeft={2}
        sx={{
          background: `linear-gradient( ${blueGrey[50]}, ${blueGrey[400]})`,
          clipPath: "polygon(98% 0, 100% 40%, 100% 100%, 0 100%, 0 0)",
          color: "#000000",
          fontSize: 24,
        }}
      >
        {army}
      </Box>
    </Box>
  );
};

NamePlate.propTypes = {
  name: PropTypes.string,
};

export default NamePlate;
