import React from "react";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = UserAuth();
  return (
    <div>
      <h1>Home</h1>
      <p>
        <p>Welcome, {user?.displayName}</p>
      </p>
    </div>
  );
};

export default Home;
