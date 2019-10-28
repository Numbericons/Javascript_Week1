// Board.won(), Board.winner();, Board.empty(pos);, Board.place_mark(pos, mark)

export default class Board{
  constructor(){
    this.board = this.genBoard();
  }

  genBoard(){
    let board = [];
    for (let i=0; i < 3; i++) { board.push([]) };
  }
  
  empty(pos){

  }

  diagWin(){

  }
  
  crossWin(){

  }
  
  won(){
    return crossWin('X') || crossWin('Y') || diagWin('X') || diagWin('Y');
  }
}