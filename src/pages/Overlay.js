import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../base";
import { Box } from "@mui/system";

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
        background: "#2B2B2D",
        width: "25%",
        height: "100vh",
      }}
    >
      <Container>
        <NamePlate name={playerOneName} army={"Adeptus Mechanics"} />
        <NamePlate name={playerTwoName} army={"Salamanders"} />
      </Container>
    </Box>
  );
};

export default Overlay;
