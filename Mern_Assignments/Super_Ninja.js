

// Creating a ninja class

class Ninja {
    constructor(name){ // Constructor that will take in a name argument 
        this.name = name; // Setting each attribute in the Ninja class
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
        this.health += 10;
        console.log("Health: " + this.health);
        return this;
    }

}
    // Creating the Sensei class
class Sensei extends Ninja {
    constructor(name){
        super(name); // Using the super method to pass information to the parent class, will error if not used
        this.health = 200; // Attributes
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    // Methods 
    speakWisdom(){
        super.drinkSake(); // Calling on the parent method to execute the drinkSake() method 
        console.log("Hay mas tiempo que vida!") // Printing a string 
        return this; // Allows us to chain methods
    }

    sayName() { // This method would execute first and if there wasn't one here 
        console.log("This is your name: " + this.name);
    }

    altSayName(){ // This would all the parent sayName() method instead of this classes sayName()
        super.sayName();
        return this; // Allows us to chain methods
    }
}

// Instantiating the Ninja class object 
const ninja1 = new Ninja("Ice"); // We need to pass in an argument for the Ninja class 

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake(); // Chaining methods while we return this;
ninja1.showStats();


// Instantiating the Sensei class object 
const sensei1 = new Sensei("Iskander");

sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom().speakWisdom().speakWisdom(); // Chaining methods while we use return this;