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

// titleize(["Mary", "Brian", "Leo"], callback);

function Elephant(name, height, tricks) {
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
ele.play();
ele.play();
ele.play();