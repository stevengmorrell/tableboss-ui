import { Button } from "@mui/material";
import React, { useState } from "react";
import { database } from "../firebase";
import { ref, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "../context/AuthContext";

const CreateGame = () => {
  const { user } = UserAuth();

  const [currentGames, setCurrentGames] = useState(0);

  onValue(ref(database, `games/${user?.uid}`), (snapshot) => {
    snapshot && setCurrentGames(Object.keys(snapshot).length);
  });

  const createNewGame = () => {
    const gameUid = uuidv4();

    currentGames < 5
      ? set(ref(database, `games/${user?.uid}/${gameUid}`), {
          somegamedata: true,
        })
      : console.log("Max Games Reached");
  };

  return (
    <div>
      <div>Create Game</div>
      <Button onClick={createNewGame}>Create New Game</Button>
    </div>
  );
};

export default CreateGame;
