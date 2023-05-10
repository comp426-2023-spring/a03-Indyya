#!/usr/bin/env node

import { rpsls } from './rpsls.js';

const args = process.argv.slice(2);

if (args.includes('-h') || args.includes('--help')) {
  console.log(`Usage: node rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node rpsls        Return JSON with single player RPSLS result.
  node rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
`);
  process.exit(0);
}

if (args.includes('-r') || args.includes('--rules')) {
  console.log(`Rules for Rock Paper Scissors Lizard Spock (RPSLS):

  - Scissors CUT Paper
  - Paper COVERS Rock
  - Rock CRUSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock`);
  process.exit(0);
}

if (args.length === 0) {
  console.log(JSON.stringify(rpsls('rock')));
  process.exit(0);
}

if (args.length === 1) {
  const result = rpsls(args[0]);
  if (result) {
    console.log(JSON.stringify(result));
  }
  process.exit(0);
}

console.error(`Invalid argument(s). Valid options are: ${weapons.join(', ')}`);
console.error(`Usage: node rpsls [SHOT]
Use 'node rpsls --help' to see available options.`);

