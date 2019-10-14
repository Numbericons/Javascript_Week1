Array.prototype.bubblesort = function(cb) {
  let swap = true;
  while(swap === true) {
    swap = false;
    for(let i = 0; i < this.length - 1; i++){
      if (cb(this[i], this[i+1])) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swap = true;
      }
    }
  }
  return this;
}

let sort = function(a,b) {
  return a < b;
}

// console.log([1,7,3,5,9,2,8].bubblesort(sort));

String.prototype.substrings = function() {
  let retArr = [];
  for(let i=0, len = this.length; i< len; i++){
    for(let j=i+1, len = this.length; j<= len; j++){
      let word = this.slice(i, j);
      if (word.length > 1) retArr.push(word);
    }
  }
  return retArr;
} 

console.log("girlpower".substrings());
