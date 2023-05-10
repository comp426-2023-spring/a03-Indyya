#!/usr/bin/env node

const { rps } = require('./lib/rpsls');
const { program } = require('commander');

program
  .description('Play Rock Paper Scissors (RPS)')
  .option('-r, --rules', 'display the rules and exit')
  .arguments('[SHOT]')
  .parse(process.argv);

if (program.rules) {
  console.log('Rules for Rock Paper Scissors:\n');
  console.log('  - Scissors CUTS Paper');
  console.log('  - Paper COVERS Rock');
  console.log('  - Rock CRUSHES Scissors');
  process.exit(0);
}

let playerShot = program.args[0];
if (!playerShot) {
  playerShot = rps().player;
} else if (!['rock', 'paper', 'scissors'].includes(playerShot.toLowerCase())) {
  console.error(`${playerShot} is out of range. Available options: rock, paper, scissors`);
  console.log('\nUsage: node-rps [SHOT]\n\nPlay Rock Paper Scissors (RPS)\n');
  process.exit(1);
}

const result = rps(playerShot.toLowerCase());
console.log(JSON.stringify(result));

