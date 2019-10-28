const Game = require('board.js');

class Game{
  constructor(reader, completeCb){
    this.reader = reader;
    this.completeCb = completeCb;
    this.player1 = new HumanPlayer("X");
    this.player2 = new HumanPlayer("Y");
    this.currPlayer = this.startPlayer();
  }

  startPlayer(){
    let chance = Math.random();
    return (chance < .5) ? this.player1 : this.player2;
  }

  togglePlayers(){
    this.currPlayer = (this.currPlayer === this.player1) ? this.player2 : this.player1;
  }
  run(){
    while(!this.board.tie()){
      let pos = this.currPlayer.prompt();
      this.board.placeMark(pos, this.currPlayer.mark);
      if (this.board.won(this.currPlayer.mark)) return this.currPlayer.mark;
      this.togglePlayers();
    }
    return "tie";
  }

}

function complete(result){
  (result === "tie") ? console.log("It's a tie!") : console.log(`The winner is: ${result}`);
}

// let game = new Game( , complete);
// game.run();