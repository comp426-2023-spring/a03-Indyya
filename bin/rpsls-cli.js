#!/usr/bin/env node

import { rpsls } from "./lib/rpsls.js";
import yargs from "yargs";

const argv = yargs
  .usage("Usage: $0 [options]")
  .option("r", {
    alias: "rules",
    describe: "Print the rules of Rock Paper Scissors Lizard Spock",
  })
  .option("h", {
    alias: "help",
    describe: "Print usage information",
  })
  .argv;

if (argv.rules) {
  console.log(
    "Scissors cuts Paper\nPaper covers Rock\nRock crushes Lizard\nLizard poisons Spock\nSpock smashes Scissors\nScissors decapitates Lizard\nLizard eats Paper\nPaper disproves Spock\nSpock vaporizes Rock\nRock crushes Scissors"
  );
  process.exit();
}

if (argv.help) {
  console.log(
    "Usage: rpsls-cli.js [options]\n\nOptions:\n  -r, --rules\tPrint the rules of Rock Paper Scissors Lizard Spock\n  -h, --help\tPrint usage information"
  );
  process.exit();
}

const validShots = ["rock", "paper", "scissors", "lizard", "spock"];
const [playerShot, opponentShot] = process.argv.slice(2);

if (!playerShot) {
  console.error("Error: No player shot provided");
  process.exit(1);
}

if (!validShots.includes(playerShot.toLowerCase())) {
  console.error(`Error: ${playerShot} is not a valid shot`);
  console.error(
    "Valid shots: rock, paper, scissors, lizard, spock"
  );
  process.exit(1);
}

const result = rpsls(playerShot

