"use script";

// Let keyword

let movie = 'Good Will Hunting';

function notebook() {
    let movie = 'The Notebook';
    let year = 2000;
    return movie;

}
console.log(movie);
console.log(notebook());
console.log(movie);



function circleArea(r, l) {
    var PI = 3.14;
    return PI * r * r * l;
}

//Arrow Functions

let circleArea2 = (r) => {
    const PI = 3.14;
    return PI * r * r;
};

//Even Short Way

let circleArea3 = r => 3.14 * r * r;

console.log(circleArea(7,2));


//Template Literals

let name = 'Emanuel';

console.log('My favorite person is '+name+ ' because he is good');
console.log(`My favorite person is ${name} because he is good`);

//Spread Operator

function addNumbers(a,b,c) {
    console.log(a+b+c);
}

var nums = [3,4,5];

addNumbers(...nums);

var meats = ['Bacon', 'ham'];
var food = ['apples', ...meats, 'kiwi', 'rice'];
console.log(food);

//Classes & Inheritance

class Person{
   constructor(name, age, weight) {
       this.name = name;
       this.age = age;
       this.weight = weight;
   }

   displayName() {
    console.log(this.name);
   } 
    displayAge() {
    console.log(this.age);
   }

   displayWeight() {
       console.log(this.weight);
   }
}

class Programmer extends Person {

    constructor(name, age, weight, language) {
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(this.language);
    }

}

let Emanuel = new Person("Emanuel",21,67);
let John = new Programmer('John', 25, 76, 'JavaScript');
Emanuel.displayWeight();
Emanuel.displayAge();
console.log('--------------------------------');
John.displayAge();
John.displayName();
John.displayLanguage();

console.log('----------------------');
//Generator Function

function* simpleGenerator() {
    yield 'Emanuel';
    yield 'John';
    console.log('Ok this is just a simple line');
    yield 'Ann';
}

let sample = simpleGenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);
console.log('-----------------------');

function* getNextId() {
    let id = 0;
    while(id < 3) {
        yield id++;
    }
}

let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log(createUser.next().value);