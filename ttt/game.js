const Game = require('board.js');

class Game{
  constructor(reader, completeCb){
    
  }
}

function cb(result){
  (result === "tie") ? console.log("It's a tie!") : console.log(`The winner is: ${result}`);
}