import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../base";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";

import NamePlate from "../components/NamePlate/NamePlate";
import { Container } from '@mui/material';

const Overlay = () => {
  const [playerOneName, setPlayerOneName] = useState(null);
  const [playerTwoName, setPlayerTwoName] = useState(null);

  //listen once for each player, retrieve all player data

  useEffect(() => {
    const playerOneNameRef = ref(database, "/users/1/name");
    onValue(playerOneNameRef, (snapshot) => {
      setPlayerOneName(snapshot.val());
    });

    const playerTwoNameRef = ref(database, "/users/2/name");
    onValue(playerTwoNameRef, (snapshot) => {
      setPlayerTwoName(snapshot.val());
    });
  });

  return (
    <Box 
    sx={{
      border: 10,   
      borderColor:  "#2B2B2D", 
      height: "100vh"
     
    }}>
      <Box
      sx={{
        background: "#2B2B2D",
        width: "25%",
        height: "98vh",
      }}
    >
      <Container>
        <NamePlate name={playerOneName} army={"Adeptus Mechanics"} />
        <NamePlate name={playerTwoName} army={"Salamanders"} />
        <Grid display="flex" justifyContent="center" alignItems="center"
        sx={{
           mt: 10,
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
       Salamanders</Grid>
      </Container>
      </Box>
    </Box>
  );
};

export default Overlay;
