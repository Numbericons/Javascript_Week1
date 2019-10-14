function range(start, end){
  if (start === end) return [end];
  if (start > end) return [];
  let arr = [start]; //[1]
  arr = arr.concat(range(start+1, end));  //[1].concat;
  return arr;
}

// console.log(range(1,5));

function sumRec(arr){
  if(arr.length === 0) return 0;
  let sum = arr[0];
  sum += sumRec(arr.slice(1));
  return sum;
}

// console.log(sumRec([1,2,3,4,5,6,7]))

function exponent1(base, exp){
  if (exp === 0) return 1;
  return base * exponent1(base, exp - 1);
}

// console.log(exponent1(2,6));

function exponent2(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ** 2;
  } else {
    return base * (exponent2(base, (exp -1) / 2) ** 2);
  }
}
// (exp(b, (n - 1) / 2) ** 2)

// console.log(exponent2(2,5));

function fibonacci(n){ //5
  if (n === 1) return [0];
  if (n === 2) return [0,1];
  if (n === 3) return [0,1,1];
  let prev = fibonacci(n - 1) //fib(4) = [0,1,1,2]
  return prev.concat((prev[prev.length - 1] + prev[prev.length - 2]));
}

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(5));
// console.log(fibonacci(8));

function deepDup(arr){
  let ret = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      ret.push(deepDup(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}
// let array = [1,2, 3, [5, 6], 7, [8]];
// let duped = deepDup(array);
// console.log(`initial dupe: ${duped}`);
// duped.push(5);
// duped[5].push(5);
// console.log(`now duped is ${duped}`);
// console.log(array);

function bsearch(arr, target) {
  if (arr.length === 0) return -1;
  let mid = Math.floor(arr.length / 2);
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid),target);
  } else {
    let result = bsearch(arr.slice(mid+1), target);
    if (result > -1) {
      return mid + 1 + result;
    } else {
      return -1;
    }
  }
}

let searchArr = [1,2,3,4,5,6,7,8,9];
// console.log(bsearch(searchArr, 0));
// console.log('expected -1');
// console.log(bsearch(searchArr, 2));
// console.log('expected 1');
// console.log(bsearch(searchArr, 5));
// console.log('expected 4');
// console.log(bsearch(searchArr, 8));
// console.log('expected 7');
// console.log(bsearch(searchArr, 11));
// console.log('expected -1');
