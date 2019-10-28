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
    return ( this.board[pos[0]][pos[1]] === '-' );
  }

  placeMark(pos, mark){
    if (this.empty(pos)) {
      this.board[pos[0]][pos[1]] = mark;
    } else {
      return 'Invalid placement'
    }
  }

  diagWin(mark){
    if (this.board[0][0] === mark && this.board[1][1] === mark && this.board[2][2] === mark) return true;
    if (this.board[2][0] === mark && this.board[1][1] === mark && this.board[0][2] === mark) return true;
    return false;
  }

  crossWin(mark){
    for(let i=0; i<3; i++) { //  [0,0] [0,1] [0,2]      1,0  1,1,  2,1    2,0
      if (this.board[i][0] === mark &&
          this.board[i][1] === mark &&
          this.board[i][2] === mark
      ) return mark;
    }
    for(let j=0; j<3; j++) {   //  0   0 1 2    1   1  2  3
      if (this.board[0][j] === mark &&
          this.board[1][j] === mark &&
          this.board[2][j] === mark
      ) return mark;
      
    }  
    return false;
  }
  
  won(mark){
    return crossWin(mark) || diagWin(mark);
  }
}