

// GIVEN
console.log(example);
var example = "I'm the example!";
AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";



// Problem 1
console.log(hello);                                   
var hello = 'world';     

// var hello;
// console.log(hello); // undefined
// hello = "world";

// Problem 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet'; // Local 
    console.log(needle);
}

// var needle;
// needle = "haystack";
// function test();
// var needle
// need;e = "magnet";
// console.log(needle); // magnet

// Problem 3 

var brendan = 'super cool';
function print(){ // function is never called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan;
// brendan = "super cool";
// The interpreter sees the function but doesn't run it
// function print();
// console.log(brendan // "super cool")

// Problem 4 

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = "chicken"
// console.log(food) // "chicken"
// function eat()
// food = "half-chicken"
// console.log(food) // "half-chicken"
// var food;
// food = "gone"

// Problem 5

mean(); // mean is not defined as a function
console.log(food);
var mean = function() { // You can't set a var to a function 
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// This is what would happen if the function runs
// mean();
// console.log(food); // undefined 
// var mean;
// mean = function();
// var food;
// food = "chicken"
// console.log(food)
// food = "fish"
// console.log(food) // "fish"
// console.log(food) // undefined

// Problem 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre) // undefined
// var genre;
//genre = "disco";
// function rewind();
// var genre;
// genre = "rock"
// console.log(genre) // "rock"
// var genre;
// genre = "r&b"
// console.log(genre) // "r&b"
// console.log(genre) // "disco"

// Problem 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo;
// dojo = "san jose"
// console.log(dojo); // "san jose"
// learn();
// dojo;
// dojo = "seattle";
// console.log(dojo) // "seattle"
// var dojo;
// dojo = "burbank"
// console.log(dojo) // "burbank"

// console.log(dojo); // san jose


// Problem 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // Can't modify const dojo {} with =, you can only .push or .pop
    }
    return dojo;
}

// console.log(makeDojo("Chicago", 65)); // 
// function makeDojo(Chicago, 65)
// const dojo = {};
// dojo.name;
// dojo.name = name;
// dojo.students;
// dojo.students = students;
// if(dojo.students > 50)
// dojo.hiring;
// dojo.hiring = true;
// dojo;

// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students)
// const dojo = {};
// dojo.name;
// dojo.name = name;
// dojo.students;
// dojo.students = students;
// if(dojo.students > 50)
// else if(dojo.students <= 0)
// dojo = "closed for now"
// dojo;