

// Creating a ninja class
class Ninja {
    constructor(name){ // Constructor that will take in a name argument 
        this.name = name; // Setting each attribute in the Ninja calss
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

     // Methods in the Ninja class
    sayName(){
        console.log("This is your name: " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name + "\n Strength: " + this.strength); // Prints the name and strength values 
        console.log("Speed: " + this.speed + "\n Health: " + this.health); // Prints the speed and health values 
    }

    drinkSake(){
        this.health += 10; // Adds 10 to the health attribute 
    }

}


// Instantiating the Ninja class object 
const ninja1 = new Ninja("Ice"); // We need to pass in an aggument for the Ninja class 
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
