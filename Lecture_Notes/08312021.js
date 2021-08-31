

// Objects, Classes, Inheritance

// This is an object literal, not the same as a class.
const myBook = {
    title: "My cool book",
    pages: 250,
    publishedYear: 2021
}

// Creating a class
class Book{                 // Default parameter vv 
    constructor(name, pages, publishedYear = 2021){
        this.name = name;
        this.pages = pages;
        this.publishedYear = publishedYear;
    }
}

// Instantiating the book class, requires 2 parameters and one optional 
const myCoolBook = new Book("The best JavaScript book", 22);

console.log(myCoolBook);
console.log(myBook);


class Vehicle{
    constructor(name, engine, miles = 5){
        this.name = name;
        this.engine = engine;
        this.miles = miles;
    }
    // Methods

    drive(){
        this.miles += 10;
        console.log(this.name + " has driven:") // One way to concatanate a value with a string
        console.log(`${this.miles} miles`) // Another way to concatanate a value with a string
        return this; // Allows us to chain function calls
    }

    honkHorn(){
        console.log("Beep!");
        return this; // Allows us to chain function calls
    }
}


const myCoolCar = new Vehicle("Mustang", "V6", 10);
const toyota = new Vehicle ("Camry", "V4", 15);

console.log(toyota instanceof Vehicle); // Checking to see if this object is an INSTANCE of the vehicle class


console.log(myCoolCar); // Displays the car object we created
myCoolCar.drive(); // Adds 10 miles
console.log(myCoolCar); // Would show the updated miles

myCoolCar.drive().drive() // Chaining method calls
myCoolCar.honkHorn();

// Inheritance ----------------------------------


class Tesla extends Vehicle{ // Has to have a name and an engine, optionally miles because we set it as a default parameter
    constructor(name, engine, autopilot = false){
        super(name, engine); // Using super method to send this information to the parent class or else it will error
        this.autopilot = autopilot;
    }

    drive(){ // This would execute first and if there wasn't a drive method in this class it would execute the parent one
        this.miles += 15;
        console.log("Zoom zoom");
        return this;
    }

    altDrive(){ 
        super.drive(); // Calling the parents class drive if we wanted to specifically call it 
        return this;
    }
}

// Instantiating the Tesla class
const modelX = new Tesla("modelX", "Electric");

// This class has access to the parents methods because it extends from the Vehicle class
modelX.drive().honkHorn();

modelX.altDrive(); // Calling the parent class drive
console.log(modelX);


// BLACK BELT MAYBE??????????????????????????????????????????????????????????????????????????
const animals = ["tiger", "bird", "zebra", "monkey"];

// filter()
// const filteredData = animals.filter( (x , i) => x.includes("o")) // Must be true or false
const filteredData = animals.filter( (animal , index) => animal.includes("o")).map( (element, index) => element + " contains an 'o'") // filter the data first then map it


console.log(filteredData);

// map() You can only map over an Array, it's an array method

// .map() has to return something, the first parameter must be an element in the array and the second has to be the index (optional)
const x = animals.map((animal, index) => {  // Storing a map in a variable and display that variable
    return `${index} - ${animal} is cool`;
})

// One line map()
const x1 = animals.map( (animal, index) => animal + "is cool!" + index);

console.log(x);
