import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../base";

const Overlay = () => {
  const [playerOneName, setPlayerOneName] = useState(null);
  const [playerTwoName, setPlayerTwoName] = useState(null);

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
    <div>
      <h1>Overlay</h1>
      <h2 style={{"color":"red"}}>Player 1: {playerOneName}</h2>
      <h2>Player 2: {playerTwoName}</h2>
    </div>
  );
};

export default Overlay;
