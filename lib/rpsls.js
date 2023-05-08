#!/usr/bin/env node

const readline = require('readline');

const rpslsRules = [
  'Scissors CUTS Paper',
  'Paper COVERS Rock',
  'Rock SMOOSHES Lizard',
  'Lizard POISONS Spock',
  'Spock SMASHES Scissors',
  'Scissors DECAPITATES Lizard',
  'Lizard EATS Paper',
  'Paper DISPROVES Spock',
  'Spock VAPORIZES Rock',
  'Rock CRUSHES Scissors'
];

const rpslsShots = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

function getOpponentShot() {
  return rpslsShots[Math.floor(Math.random() * rpslsShots.length)];
}

function getResult(playerShot, opponentShot) {
  if (playerShot === opponentShot) {
    return 'tie';
  } else {
    const index = rpslsShots.indexOf(playerShot);
    const beats = rpslsRules[index].split(' ')[0];
    if (beats === opponentShot) {
      return 'win';
    } else {
      return 'lose';
    }
  }
}

function playRpsls(playerShot) {
  if (!playerShot) {
    playerShot = rpslsShots[Math.floor(Math.random() * rpslsShots.length)];
    return JSON.stringify({ player: playerShot });
  }

  if (!rpslsShots.includes(playerShot)) {
    return JSON.stringify({ error: 'Invalid shot. Use one of: ' + rpslsShots.join(', ') });
  }

  const opponentShot = getOpponentShot();
  const result = getResult(playerShot, opponentShot);
  return JSON.stringify({ player: playerShot, opponent: opponentShot, result: result });
}

const args = process.argv.slice(2);
const rpslsHelp = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}
`;

if (args.includes('-h') || args.includes('--help')) {
  console.log(rpslsHelp);
  process.exit(0);
}

const rpslsRulesMessage = `Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

${rpslsRules.map(rule => '  - ' + rule).join('\n')}
`;

if (args.includes('-r') || args.includes('--rules')) {
  console.log(rpslsRulesMessage);
  process.exit(0);
}

console.log(playRpsls(args[0]));

