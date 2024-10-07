import cowsay from "cowsay";
import chalk from "chalk";

// const cowsay = require("cowsay");
// const chalk = require("chalk");

// console.log(
//   cowsay.say({
//     text: "Mooo",
//     e: "oO",
//     T: "U",
//   })
// );

console.log(
  chalk.green(
    cowsay.think({
      text: "Hello everybody!",
      cow: cowsay.SQUIRREL,
      e: "O-",
      T: "U",
    })
  )
);
