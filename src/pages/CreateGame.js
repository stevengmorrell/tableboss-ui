import { Button } from "@mui/material";
import React from "react";
import { database } from "../firebase";
import { ref, set, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "../context/AuthContext";

const CreateGame = () => {
  const { user } = UserAuth();

  const createNewGame = async () => {
    let games;
    const gameUid = uuidv4();
    await get(ref(database, `games/${user?.uid}`)).then((snapshot) => {
      games = snapshot.val() ?? {};
    });
    const gameCount = Object.keys(games).length;
    gameCount < 5
      ? set(ref(database, `games/${user?.uid}/${gameUid}`), {
          somegamedata: true,
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
