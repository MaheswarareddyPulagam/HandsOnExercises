import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 85 },
    { name: "Gill", score: 60 },
    { name: "Rahul", score: 72 },
    { name: "Pant", score: 55 },
    { name: "Hardik", score: 80 },
    { name: "Jadeja", score: 65 },
    { name: "Ashwin", score: 75 },
    { name: "Bumrah", score: 40 },
    { name: "Shami", score: 68 },
    { name: "Siraj", score: 77 }
  ];

  const lowScore = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>

      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>

      <ul>
        {lowScore.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;