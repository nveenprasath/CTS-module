import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 65 },
    { name: "Gill", score: 90 },
    { name: "Pant", score: 45 },
    { name: "Jadeja", score: 75 },
    { name: "Rahul", score: 55 },
    { name: "Bumrah", score: 60 },
    { name: "Shami", score: 80 },
    { name: "Iyer", score: 88 },
    { name: "Kuldeep", score: 70 },
    { name: "Ashwin", score: 50 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h2>Players with score below 70:</h2>
      {below70.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListOfPlayers;
