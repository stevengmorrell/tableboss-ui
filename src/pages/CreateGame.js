import { Button } from "@mui/material";
import React from "react";
import { database } from "../firebase";
import { ref, set, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "../context/AuthContext";
import basicGameData from "../basicGameData.json";

const CreateGame = () => {
  const { user } = UserAuth();

  // 1. Select Game Type (AOS - GHB 22/23 S1, AOS - GHB 22/23 S2 etc.)
  // 2. Give game a name (Unique?)
  // 3. Create game

  const createNewGame = async () => {
    let games;
    const gameUid = uuidv4();
    await get(ref(database, `games/${user?.uid}`)).then((snapshot) => {
      games = snapshot.val() ?? {};
    });
    const gameCount = Object.keys(games).length;
    gameCount < 5
      ? set(ref(database, `games/${user?.uid}/${gameUid}`), {
          gameName: "My 1st 40k Game",
          ...basicGameData,
        })
      : console.log("MAX GAMES REACHED");
  };

  return (
    <div>
      <div>Create Game</div>
      <Button onClick={createNewGame}>Create New Game</Button>
    </div>
  );
};

export default CreateGame;
