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

// function fizzBuzz(arr) {
//   return arr.filter(num => {
//     if (num % 3 === 0) {
//       return (num % 5 !== 0);
//     } else {
//       return (num % 5 === 0)
//     }
//   })
// }

// console.log(fizzBuzz([2,4,3,7,9,15, 10]));

const isPrime = function(n){
  for(let i = 2;i <n;i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(2));

// console.log(isPrime(10));

// console.log(isPrime(15485863));

// console.log(isPrime(3548563));

const sumOfNPrimes = (n) => {
  if (n === 0) return 0;
  let sum = 0;
  let primes = [];
  let i = 2;
  while(primes.length < n) {
    if (isPrime(i)) {
      sum += i;
      primes.push(i);
    }
    i++;
  }
  return sum;
}

console.log(sumOfNPrimes(0));
// 0

console.log(sumOfNPrimes(1));
// 2

console.log(sumOfNPrimes(4));
// 17