import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

const NamePlate = ({ name, army }) => {
  return (
    <Box>
      <Box component="span" sx={{ color: "#FFFFFF" }}>{name}</Box>
      <Grid display="flex" justifyContent="center" alignItems="center"
        sx={{
           textTransform: "none",
           backgroundColor: "#8d99ae",
           borderRadius: "0px",
           clipPath: "polygon(100% 0, 100% 65%, 90% 100%, 0 100%, 0 35%, 10% 0)",
           //(0 100%, 65% 100%, 100% 90%, 100% 0, 35% 0, 0 10%)
           color: "#000000",
           fontSize: "2",      
           alignText: "center"
                     
        }}         
       >
       {army}</Grid>
    </Box>
  );
};

NamePlate.propTypes = {
  name: PropTypes.string,
};

export default NamePlate;
