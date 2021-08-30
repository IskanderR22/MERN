

var x; // Global scope and var takes the most amount of memory. Var also gets hoisted.
x = "Hello";

let y = "This" // Let is like an anchor, it doesn't get hoisted. 

// 1.   var keyword is hoisted to the top of the scope.
// 2. functions acts as cages for scope
//      for loops do the same thing
// 3. Assignments (=) stay where they are as anchors, see line 33. It stays there and doesn't gert hoisted to the top.

for( let i = 0; i < 10; i++){
    console.log(i);
}

const z = [0,1,2,3,4] // Const can't be altered after it has been assigned to something, EX you can't say z = "Change";

z.push(6); // This would be one way of changing a const

const object = {
    name: "Ice",
    favFood: "Pizza",
}
object.name = "Iskander"; // This would modify the specific key value pair in the object
console.log(object);


doSomething(); // This will still call the function 

function doSomething(){

    var x = "hi"; // Local scope within the curly braces
}
console.log(x);


// Destructuring 

// Object
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipCode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipCode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};


// Deconstructing and setting variables to the first address and the second address, look at line 78
const { addresses: [whiteHouse, sherlock] } = person; 
console.log(whiteHouse);
console.log(sherlock);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// Deconstructing an array, ORDER matters and it always starts with a, b, c. If you wanted to skip a, you would just remove it from the const
const [ , b, c] = animals; // Arrays are always plural.
console.log(a);
console.log(b);
console.log(c);


let email = person.email; // One way to pull out info from the person object

// This is destructuring and ORDER doesn't matter for an object
const {email:personEmail, firstName, lastName} = person; // This is react syntax. The : will change the name of the key in the dictionary 

console.log(personEmail);
console.log(lastName);
console.log(firstName);


// Pass by value 
let h = 10;
let j = 10;

j += 20;

console.log(h); // 10
console.log(j); // 30


// Passing by reference 
let u = [10, 20 ,30];
let copyU = u; // copyU is pointing to u in memory, so when u changes w will also change

let copyU = [...u]; // ... is the Spread operator is taking whatever the u is and wrapping it in an array

u.push(88);

console.log(u);
console.log(w);


// Arrow funtions 
// Normal funtion
function sayHello(name){
    console.log("hello " + name);
}

// ---------- Arrow funtion
const sayHello2 = (name) => { // The => is the same as function 
    console.log("hello " = name);
}

const square = (num) => num*num;

const square = (num) => {
    return num*num;
}


// Ternary operator ?

var v = 11;

if (x > 10) {
    return "Yes";
}
else {
    return "No";
}

// This is the Ternary operation, three operatiors. This is the same as the if, else check.
x > 10 ? "Yes" : "No";