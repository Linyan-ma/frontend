#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
program
  .command("init")
  .argument("<name>")
  .description("An application for pizza ordering")
  .option("-p, --peppers", "Add peppers")
  .option("-c, --cheese <type>", "Add the specified type of cheese", "marble")
  .option("-C, --no-cheese", "You do not want any cheese")
  .action((name) => {
    console.log(name);
  });

program.parse(process.argv);

const options = program.opts();
console.log("you ordered a pizza with:");
if (options.peppers) console.log("  - peppers", options.peppers);
