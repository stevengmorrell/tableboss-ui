import { Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid2 from '@mui/material/Unstable_Grid2'

function SecondaryProgress() {


  

const [value, setValue] = useState(0)

 function handleChange (event, newValue) {
  setValue(newValue)
}

  return (
    
    <Grid2 container spacing={2}>


      <Grid2 item xs>
        <Slider 
          min={0} 
          max={15} 
          value={value}
          onChange={handleChange}
          />
      </Grid2>

      <Grid2 item>
        <Typography >{value}/15</Typography>
      </Grid2>


    </Grid2>
  );
}

export default SecondaryProgress;
