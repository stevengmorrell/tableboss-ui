import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../base";
import { Box } from "@mui/system";
import NamePlate from "../components/NamePlate/NamePlate";
import { Container } from "@mui/material";
import ScorePlate from "../components/ScorePlate/ScorePlate";
import Secondaries from "../components/Secondaries/Secondaries";
import RoundPlate from "../components/RoundPlate/RoundPlate";
import OverlayImageBottom from "../components/OverlayImageBottom/OverlayImageBottom";

const Overlay = () => {
  const playerNameRef = ref(database, "/users");
  const [playerData, setPlayerData] = useState({ 1: {}, 2: {} });
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
        display: "flex",
        "justify-content": "space-between",
        "align-items": "flex-start",
      }}
    >
      <Container>
        <NamePlate name={playerData["1"]?.name} army={playerData["1"]?.army} />
        <ScorePlate commandPoints={3} />
        <Secondaries />
        <NamePlate name={playerData["2"]?.name} army={playerData["2"]?.army} />
        <ScorePlate commandPoints={5} />
        <RoundPlate />
        <OverlayImageBottom />
      </Container>
    </Box>
  );
};

export default Overlay;
