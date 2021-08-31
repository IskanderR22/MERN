
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
        console.log("Name: " + this.name + "\n Strength: " + this.strength);
        console.log("Speed: " + this.speed + "\n Health: " + this.health);
    }

    drinkSake(){
        this.health += 10;
    }

}
    // Creating the Sensei class
class Sensei extends Ninja {
    constructor(name){
        super(name); // ADD COMMENTS 
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    // Methods 
    speakWisdom(){
        super.drinkSake();
        console.log("Hay mas tiempo que vida!")
    }

    sayName() {
        const childFunc = super.sayName();
    }

    sake() {
        const sakeChild = super.drinkSake();
        console.log(this.health);
    }

}



// Instantiating the Ninja class object 
const ninja1 = new Ninja("Ice"); // We need to pass in an aggument for the Ninja class 

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


// Instantiating the Sensei class object 
const sensei1 = new Sensei("Iskander");

sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();