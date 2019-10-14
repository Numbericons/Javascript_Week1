// Array.prototype.uniq = function(){
//   let retArr = [];
//   for(let i = 0; i < this.length; i++){
//     if(!retArr.includes(this[i])) retArr.push(this[i]);
//   }
//   return retArr;
// }

// let x = [1,2,2,2,2,3,3,3,3].uniq();
// console.log(x);

// Array.prototype.twoSum = function(){
//   let pairs = [];
//   for(let i = 0; i < this.length - 1; i++) {
//     for(let j = i + 1; j < this.length - 1; j++) {
//       if(this[i] + this[j] === 0) pairs.push([i, j])
//     }
//   }
//   return pairs;
// }
// let y = [1,-1,2,3,4,7,6,-4,8];
// console.log(y.twoSum());

// Array.prototype.transpose = function(){
//   let transArr = [];
//   for (let t = 0; t < this.length; t++){
//     transArr.push([]);
//   }
//   for (let i = 0; i < this.length; i++) {
//     for (let j = 0; j < this[i].length; j++) {
//       transArr[j].push(this[i][j]);
//     }
//   }
//   return transArr;
// }
// let arr = [[1,2,3], //[1,4,7]   this[0][0]
//            [4,5,6],  //[2,5,8]
//            [7,8,9]]; // [3,6,9]

// console.log(arr.transpose());

