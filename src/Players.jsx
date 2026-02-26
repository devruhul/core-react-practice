import React, { useEffect, useState } from "react";

export const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>Players {players.length}</div>
      {players.map((player) => (
        <div key={player.id}>{player.name}</div>
      ))}
    </>
  );
};
