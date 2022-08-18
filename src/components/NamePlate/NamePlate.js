import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const NamePlate = ({ name, army }) => {
  return (
    <Box>
      <Box component="span" sx={{ color: "#FFFFFF" }}>{name}</Box>
      <Box display="flex" justifyContent="center" alignItems="center"
        sx={{
           textTransform: "none",
           backgroundColor: "#8d99ae",
           borderRadius: "0px",
           clipPath: "polygon(98% 0, 100% 40%, 100% 100%, 0 100%, 0 0)",
           //"polygon(80% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
           //"polygon(100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%, 10% 0)",
           color: "#000000",
           fontSize: "2",      
           alignText: "center"
                     
        }}         
       >
       {army}</Box>
    </Box>
  );
};

NamePlate.propTypes = {
  name: PropTypes.string,
};

export default NamePlate;
