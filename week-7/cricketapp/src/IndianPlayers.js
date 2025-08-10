import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Players:</h2>
      {allPlayers.map((name, i) => <p key={i}>{name}</p>)}

      <h2>Even Team:</h2>
      {evenPlayers.map((name, i) => <p key={i}>{name}</p>)}

      <h2>Odd Team:</h2>
      {oddPlayers.map((name, i) => <p key={i}>{name}</p>)}
    </div>
  );
};

export default IndianPlayers;
