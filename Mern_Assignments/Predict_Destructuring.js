
// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // This is the first position in the array
const [ ,otherRandomCar ] = cars  // With the comma at the start skips the first position and prints the second
//Predict the output

console.log(randomCar) // "Tesla"
console.log(otherRandomCar) // "Mercedes"

// Problem 2 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // Reassigning the name key to otherName
//Predict the output
console.log(name); // Error because we reassigned name to otherName
console.log(otherName);

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // Prints "12345"
console.log(hashedPassword); // Undefinded because there is no key name with password in the object 

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second);  //false 
console.log(first == third); // true 


// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // Setting the value of key to the matching key in the object so "value"
const { secondKey } = lastTest; // Setting the value of secondKey to the array
const [ ,willThisWork] = secondKey; // Skipping the first value in the array with the comma so this is set to 5
//Predict the output
console.log(key); // prints value 
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Prints the index value at zero, so 1
console.log(willThisWork); // Prints the second value in the array.