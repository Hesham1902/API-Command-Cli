#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} from "./index.js";

program.version("1.0.0").description("Client Management System");

//Customer Questions

const questions = [
  { type: "input", name: "firstname", message: "Customer First Name" },
  { type: "input", name: "lastname", message: "Customer Last Name" },
  { type: "input", name: "phone", message: "Customer Phone Number" },
  { type: "input", name: "email", message: "Customer email address" },
];

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    inquirer.prompt(questions).then((answers) => addCustomer(answers));
  });

//Find Command
program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => {
    findCustomer(name);
  });

//Update Command
program
  .command("update <_id>")
  .alias("u")
  .description("Update a customer")
  .action((_id) => {
    inquirer.prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command("remove <_id>")
  .alias("r")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));

program
  .command("list")
  .alias("ls")
  .description("List all customers")
  .action(() => {
    listCustomers();
  });

program.parse(process.argv);
