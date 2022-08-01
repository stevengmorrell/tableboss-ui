import { ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../base";

const ManageGames = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    set(ref(database, "users/1"), {
      name: name,
    });
  });

  return (
    <div>
      <h1>Manage Games</h1>
      <input
        name='name'
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default ManageGames;
