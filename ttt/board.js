class Board {
  constructor(){
    this.grid = this.genBoard();
  }

  genBoard(){
    let grid = [];
    for (let i=0; i < 3; i++) { grid.push(['-', '-', '-']) };
    return grid;
  }
  
  empty(pos){
    return ( this.grid[pos[0]][pos[1]] === '-' );
  }

  placeMark(pos, mark){
    if (this.empty(pos)) {
      this.grid[pos[0]][pos[1]] = mark;
    } else {
      return 'Invalid placement'
    }
  }

  diagWin(mark){
    if (this.grid[0][0] === mark && this.grid[1][1] === mark && this.grid[2][2] === mark) return true;
    if (this.grid[2][0] === mark && this.grid[1][1] === mark && this.grid[0][2] === mark) return true;
    return false;
  }

  crossWin(mark){
    for(let i=0; i<3; i++) { //  [0,0] [0,1] [0,2]      1,0  1,1,  2,1    2,0
      if (this.grid[i][0] === mark &&
          this.grid[i][1] === mark &&
          this.grid[i][2] === mark
      ) return mark;
    }
    for(let j=0; j<3; j++) {   //  0   0 1 2    1   1  2  3
      if (this.grid[0][j] === mark &&
          this.grid[1][j] === mark &&
          this.grid[2][j] === mark
      ) return mark;
      
    }  
    return false;
  }
  
  won(mark){
    return this.crossWin(mark) || this.diagWin(mark);
  }

  tie(){
    for(let i=0; i< 3; i++) {
      for(let j=0; j< 3; j++) {
        if (!this.empty([i, j])) return false;
      }
    }
    return true;
  }

  render(){
    for(let i=0; i<3; i++){
      console.log(`${this.grid[i][0]} ${this.grid[i][1]} ${this.grid[i][2]}`)
    }
  }
}

module.exports = Board;

// const board = new Board();
// board.render();
// board.placeMark([1,1], "X");
// board.placeMark([0,0], "X");
// board.placeMark([2,2], "X");
// board.render();
// console.log(board.won("X"));
// console.log(board.won("Y"));
// console.log(board.crossWin("X"));