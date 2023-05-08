#!/usr/bin/env node

import { rps } from "./lib/rpsls.js";
import yargs from "yargs";

const argv = yargs
  .usage("Usage: $0 [options]")
  .option("r", {
    alias: "rules",
    describe: "Print the rules of Rock Paper Scissors",
  })
  .option("h", {
    alias: "help",
    describe: "Print usage information",
  })
  .argv;

if (argv.rules) {
  console.log(
    "Rock beats Scissors\nScissors beats Paper\nPaper beats Rock"
  );
  process.exit();
}

if (argv.help) {
  console.log(
    "Usage: rps-cli.js [options]\n\nOptions:\n  -r, --rules\tPrint the rules of Rock Paper Scissors\n  -h, --help\tPrint usage information"
  );
  process.exit();
}

const validShots = ["rock", "paper", "scissors"];
const [playerShot, opponentShot] = process.argv.slice(2);

if (!playerShot) {
  console.error("Error: No player shot provided");
  process.exit(1);
}

if (!validShots.includes(playerShot.toLowerCase())) {
  console.error(`Error: ${playerShot} is not a valid shot`);
  console.error("Valid shots: rock, paper, scissors");
  process.exit(1);
}

const result = rps(playerShot.toLowerCase(), opponentShot);
if (opponentShot) {
  console.log(JSON.stringify(result));
} else {
  console.log(JSON.stringify({ player: result }));
}

