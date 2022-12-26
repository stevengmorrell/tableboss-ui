import React from "react";
import { UserAuth } from "../context/AuthContext";

const CreateGame = () => {
  const { user } = UserAuth();
  return (
    <div>
      <div>Create Game</div>
      <p>Welcome, {user?.displayName}</p>
    </div>
  );
};

export default CreateGame;
