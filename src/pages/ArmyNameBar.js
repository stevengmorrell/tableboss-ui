import React from "react";

import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper'
import TextField from "@mui/material/TextField"


const ArmyNameBar = () => {
  return (
      <Grid container>
    <TextField variant="outlined" disabled value="WARHAMMER"
    sx={{
        m: 5,
        border: 5,
        borderTopRightRadius: 20

        }}>


    </TextField>
    <Paper square={true}
    sx={{
        border: 10,
        borderTopRightRadius: 10     
        }}>
        <p>HELLo</p>
    </Paper>
      <Grid  sx={{
        border: 0.5, 
        borderradius: 50,
        borderTopRightRadius: 20,
        background: "silver",    
        maxHeight: 50,
        pl: 2, 
        pr: 10, 
        m: 2,
        fontFamily: "Inter", 
        fontWeight: 400,
        }}>
        <p>WARHAMMER ARMY NAME</p>
      </Grid>
    </Grid>
  );
};

export default ArmyNameBar;
