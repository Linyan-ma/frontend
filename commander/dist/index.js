#!/usr/bin/env node
'use strict';

var commander = require('commander');

var program = new commander.Command();
program
    .command("init")
    .argument("<name>")
    .description("An application for pizza ordering")
    .option("-p, --peppers", "Add peppers")
    .option("-c, --cheese <type>", "Add the specified type of cheese", "marble")
    .option("-C, --no-cheese", "You do not want any cheese")
    .action(function (name) {
    console.log(name);
});
program.parse(process.argv);
var options = program.opts();
console.log("you ordered a pizza with:");
if (options.peppers)
    console.log("  - peppers", options.peppers);
