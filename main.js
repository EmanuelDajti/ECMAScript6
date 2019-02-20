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

//Classes

class Person{
   constructor(name, age, weight) {
       this.name = name;
       this.age = age;
       this.weight = weight;
   }

   displayWeight() {
       console.log(this.weight);
   }
}

let Emanuel = new Person("Emanuel",21,67);
Emanuel.displayWeight();