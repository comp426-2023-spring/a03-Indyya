#!/usr/bin/env node

const weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function rpsls(player) {
  player = player.toLowerCase();
  
  if (!weapons.includes(player)) {
    console.error(`${player} is out of range. Valid options are: ${weapons.join(', ')}`);
    return;
  }

  const opponent = weapons[Math.floor(Math.random() * weapons.length)];
  const result = determineResult(player, opponent);

  return {
    player,
    opponent,
    result,
  };
}

function determineResult(player, opponent) {
  if (player === opponent) {
    return 'tie';
  } else if (
    (player === 'rock' && (opponent === 'scissors' || opponent === 'lizard')) ||
    (player === 'paper' && (opponent === 'rock' || opponent === 'spock')) ||
    (player === 'scissors' && (opponent === 'paper' || opponent === 'lizard')) ||
    (player === 'lizard' && (opponent === 'paper' || opponent === 'spock')) ||
    (player === 'spock' && (opponent === 'rock' || opponent === 'scissors'))
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

export { rpsls };

// rps.js
const validShots = ["rock", "paper", "scissors"];

function rps(userShot) {
  if (userShot) {
    // If the user's shot is not valid, return an error message
    if (!validShots.includes(userShot.toLowerCase())) {
      return console.error(`${userShot} is out of range.`);
    }

    // Generate a random shot for the simulated opponent
    const opponentShot =
      validShots[Math.floor(Math.random() * validShots.length)];

    // Determine the result of the game
    if (userShot.toLowerCase() === opponentShot) {
      return { player: userShot, opponent: opponentShot, result: "tie" };
    } else if (
      (userShot.toLowerCase() === "rock" && opponentShot === "scissors") ||
      (userShot.toLowerCase() === "paper" && opponentShot === "rock") ||
      (userShot.toLowerCase() === "scissors" && opponentShot === "paper")
    ) {
      return { player: userShot, opponent: opponentShot, result: "win" };
    } else {
      return { player: userShot, opponent: opponentShot, result: "lose" };
    }
  } else {
    // If no shot is provided, return a random shot for the player
    return { player: validShots[Math.floor(Math.random() * validShots.length)] };
  }
}

module.exports = { rps };

