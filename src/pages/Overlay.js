import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { Box } from "@mui/system";
import NamePlate from "../components/NamePlate/NamePlate";
import { Container } from "@mui/material";
import ScorePlate from "../components/ScorePlate/ScorePlate";
import Secondaries from "../components/Secondaries/Secondaries";
import RoundPlate from "../components/RoundPlate/RoundPlate";
import OverlayImageBottom from "../components/OverlayImageBottom/OverlayImageBottom";

const gameRef = ref(database, "/games/4b305bd0-2eb8-11ed-a261-0242ac120002");
const factionsRef = ref(database, "/factions");

const Overlay = () => {
  const [gameData, setGameData] = useState({});
  const [factions, setFactions] = useState({});

  useEffect(() => {
    onValue(gameRef, (snapshot) => {
      setGameData(snapshot.val());
    });
    onValue(factionsRef, (snapshot) => {
      setFactions(snapshot.val());
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
          name={gameData?.p1Name}
          army={factions[gameData.p1Faction]?.name}
        />
        <ScorePlate score={gameData?.p1Score} commandPoints={gameData?.p1Cp} />
        <Secondaries
          sec1={gameData?.p1Sec1}
          sec2={gameData?.p1Sec2}
          sec3={gameData?.p1Sec3}
        />
        <Secondaries
          sec1={gameData?.p2Sec1}
          sec2={gameData?.p2Sec2}
          sec3={gameData?.p2Sec3}
        />
        <NamePlate
          name={gameData?.p2Name}
          army={factions[gameData?.p2Faction]?.name}
        />
        <ScorePlate score={gameData?.p2Score} commandPoints={gameData?.p2Cp} />
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
