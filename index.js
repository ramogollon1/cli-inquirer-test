const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "rowlist",
      name: "comida",
      message: "Cual es tu comida favorita?",
      choices: ["pasta", "arroz", "pescado"],
    },
    {
      type: "list",
      name: "names",
      message: "Cuales nombres te gustan mas?",
      choices: ["maria", "rafael", "america"],
    },
    {
      name: "color",
      message: "Cual es tu color favorito?",
      default: "red",
    },
    {
      name: "website",
      message: "Cual es tu website favorita?",
    },
  ])
  .then((answers) => {
    console.log({ answers });
  });
