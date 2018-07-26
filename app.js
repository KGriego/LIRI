var inquirer = require('inquirer');

createPlayers();

function createPlayers() {
inquirer.prompt([
  {
    type: "input",
    message: "Player Name: ",
    name: "playerName",
  },
  // {
  //   type: "input",
  //   message: "Player Position",
  //   name: "playerPosition"
  // },
  // {
  //   type: "list",
  //   message: "Player Offense, 1 lowest, 10 highest",
  //   choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",],
  //   name: "playerOffense"
  // },
  // {
  //   type: "list",
  //   message: "Player Defense, 1 lowest, 10 highest",
  //   choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",],
  //   name: "playerDefense"
  // },
  // {
  //   type: "input",
  //   message: "Starter or Sub?",
  //   name: "playerPlaying"
  // }
]).then(function (inquirerResponse) {
  var playerName = inquirerResponse.playerName;
  // console.log(playerName)
  console.log(playerName)
//   this.printStats = function() {
//         console.log("\n-------------\n");
//         console.log(
//           "Name: " +
//             this.playerName +
//             "\nPosition: " +
//             this.playerPosition +
//             "\nOffense: " +
//             this.playerOffense +
//             "\nDefense: " +
//             this.playerDefense +
//             "\nPlaying: " +
//             this.playerPlaying
//         );
//         console.log("\n-------------\n");
// };
});
}

// function CreatePlayer(name, position, offense, defense, playing) {
//   this.playerName = name;
//   this.playerPosition = position;
//   this.playerOffense = offense;
//   this.playerDefense = defense;
//   this.playerPlaying = playing

//   // method which prints all of the stats for a player
//   this.printStats = function() {
//     console.log("\n-------------\n");
//     console.log(
//       "Name: " +
//         this.playerName +
//         "\nPosition: " +
//         this.playerPosition +
//         "\nOffense: " +
//         this.playerOffense +
//         "\nDefense: " +
//         this.playerDefense +
//         "\nPlaying: " +
//         this.playerPlaying
//     );
//     console.log("\n-------------\n");
//   };
// }

// var tim = new CreatePlayer("Tim", "Forward", 3, 9, "Starter")

// tim.printStats();