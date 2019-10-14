Array.prototype.myEach = function(cb){
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}

// let arr = [1,2,3,4,5];
// arr.myEach(function(el){console.log(el)});
// arr.myEach(function(el){console.log(el * el)});

Array.prototype.myMap = function(cb) {
  let ret = [];
  // this.forEach(el => {
  this.myEach(el => {
    ret.push(cb(el));
  })
  return ret;
}
let arr2 = [1,2,3,4,5];
let callback = (el) => {return el * 2};
// console.log(callback(5));
// console.log(arr2.myMap(callback));

Array.prototype.myReduce = function(cb, initial){
  let acc = initial || this[0];
  let arr = (initial) ? this.slice(1) : this;
  arr.myEach(el => {
    acc = cb(acc, el);
  })
  return acc;
}

let mult = function(num1, num2) {
  return num1 * num2;
}
let div = function(num1, num2) {
  return num1 / num2;
}
let add = function(num1, num2) {
  return num1 + num2;
}
// console.log(arr2.myReduce(mult, 10));
// console.log(arr2.myReduce(div, 10));
// console.log(arr2.myReduce(add, 10));