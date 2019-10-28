class HumanPlayer{
  constructor(mark){
    this.mark = mark;
  }

  prompt(){
    console.log("Enter a position to move: ");
  }
}

module.exports = HumanPlayer;