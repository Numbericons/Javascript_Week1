function titleize(names, cb){
  let arr = names.map(name => {
    return `Mx. ${name} Jingleheimer Schmidt`
  })
  cb(arr);
}


const callback = function(arr){
  arr.forEach(el => {
    console.log(el);
  })
}

titleize(["Mary", "Brian", "Leo"], callback);

function Elephant(name, height) {
  this.name = name;
  this.height = height;
  this.tricks = [];
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'PhrRRRRRRRRR`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function(){
  let rand = Math.floor(Math.random() * this.tricks.length);
  let trick = this.tricks[rand];
  console.log(`${this.name} is ${trick}`);
}

let ele = new Elephant("Betty", 120);
console.log(ele.trumpet());
console.log(ele.height);
console.log(ele.grow());
console.log(ele.height);
ele.addTrick("painting a picture");
ele.addTrick("jumping through hoops");
ele.addTrick("smashing a watermelon");
ele.play();
ele.play();
ele.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

herd.forEach(el => {
  Elephant.paradeHelper(el);
})

function dinerBreakfast() {
  this.order = ["I'd like cheesy scrambled eggs"];
  console.log("I'd like cheesy scrambled eggs");
  return function(moreFoods){
    this.order.push(moreFoods);
    console.log(this.order.join(" ") + " please.");
  }
}

let bfastOrder = dinerBreakfast();
// "I'd like cheesy scrambled eggs please"
bfastOrder("chocolate chip pancakes");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes please."
bfastOrder("grits");
// "I'd like cheesy scrambled eggs and chocolate chip pancakes and grits please."