// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping1();

// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping2();
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping3();
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping4();

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }
// mysteryScoping5();

// function madLib(verb,noun,adjective){
//   return `We shall ${verb.toUpperCase()} the ${noun.toUpperCase()} ${adjective.toUpperCase()}.`
// }

// let x = madLib('Make',"best", "quac");
// console.log(x);

// const isSubstring = (string,substring) => {
//   return string.includes(substring);
// }
// console.log(isSubstring("cat in the hat", "cats"));
// console.log(isSubstring("flappybird", "flap"));

function fizzBuzz(arr) {
  return arr.filter(num => {
    if (num % 3 === 0) {
      return (num % 5 === 0) ? 
    }
  })
}

console.log(fizzBuzz([2,4,3,7,9,15]));