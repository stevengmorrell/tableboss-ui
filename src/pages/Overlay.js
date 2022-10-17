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

const gameRef = ref(database, "/games/4b305bd0-2eb8-11ed-a261-0242ac120002");

const Overlay = () => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    onValue(gameRef, (snapshot) => {
      setGameData(snapshot.val());
    });
  }, []);

  return (
    <Box
      sx={{
        background: "#2B2B2D",
        width: "25%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Container>
        <NamePlate
          name={gameData?.playerOneName}
          army={gameData?.playerOneFaction}
        />
        <ScorePlate
          score={gameData?.playerOneScore}
          commandPoints={gameData?.playerOneCP}
        />
        <Secondaries
          p1Sec1={gameData?.p1Sec1}
          p1Sec2={gameData?.p1Sec2}
          p1Sec3={gameData?.p1Sec3}
        />
        <NamePlate
          name={gameData?.playerTwoName}
          army={gameData?.playerTwoFaction}
        />
        <ScorePlate
          score={gameData?.playerTwoScore}
          commandPoints={gameData?.playerTwoCP}
        />
        <RoundPlate
          currentRound={gameData?.currentRound}
          missionName={gameData?.missionName}
        />
        <OverlayImageBottom />
      </Container>
    </Box>
  );
};

export default Overlay;
