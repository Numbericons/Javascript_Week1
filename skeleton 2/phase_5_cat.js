function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
}

let jewel = new Cat("Jewel", "Beryt");
console.log(jewel.cuteStatement());
let calvin = new Cat("Calvin", "Zach");
console.log(calvin.cuteStatement());
let roscoe = new Cat("Roscoe", "Mills");
console.log(roscoe.cuteStatement());


Cat.prototype.cuteStatement = function(){
  return `Everyone loves ${this.name}! GET WITH THE PROGRAM!`;
}

console.log(jewel.cuteStatement());
console.log(calvin.cuteStatement());
console.log(roscoe.cuteStatement());

Cat.prototype.meow = function(){
  return `${this.name} lets out a fierece meow!`
}

jewel.meow = function(){
  return `${this.name} lets of a sweet little beep of a meow`
}

console.log(jewel.meow());
console.log(calvin.meow());
console.log(roscoe.meow());