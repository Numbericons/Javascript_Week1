function range(start, end){
  console.log(`start is ${start} end is ${end}`)
  if (start === end) return [end];
  if (start > end) return [];
  let arr = [start]; //[1]
  arr = arr.concat(range(start+1, end));  //[1].concat;
  return arr;
}

// console.log(range(1,5));

function sumRec(arr){

}

console.log(sumRec([1,2,3,4,5]))