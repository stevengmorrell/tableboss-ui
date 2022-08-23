import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../base";
import { Box } from "@mui/system";
import NamePlate from "../components/NamePlate/NamePlate";
import { Container } from "@mui/material";

const Overlay = () => {
  const playerNameRef = ref(database, "/users");
  const [playerData, setPlayerData] = useState({1:{},2:{}});
  // const [playerTwo, setPlayerTwo] = useState(null);
  

  useEffect(() => {
    
    onValue(playerNameRef, (snapshot) => {
      setPlayerData(snapshot.val());
    });
  }, [playerNameRef]);


  return (
    <Box
      sx={{
        background: "#2B2B2D",
        width: "25%",
        height: "100vh",
      }}
    >
      <Container>
        <NamePlate name={playerData["1"]?.name} army={playerData["1"]?.army} />
        <NamePlate name={playerData["2"]?.name} army={playerData["2"]?.army} />
      </Container>
    </Box>
  );
};

export default Overlay;
