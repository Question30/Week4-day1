//Hamster Class
class Hamster {
    constructor ( name){
        this.owner = " ";
        this.name = name;
        this.price = 15;
    }

    wheelRun(){
        console.log("squeak squeak");
    }

    eatFood(){
        console.log("nibble nibble");
    }

    getPrice(){
        return this.price;
    }
}

//Person Class
class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    //Returns the name of the person
    getName(){
        return this.name;
    }
    //Returns the age of the person
    getAge(){
        return this.age;
    }
    //Returns the weight of the person
    getWeight(){
        return this.weight;
    }
    //Greets the person
    greet(){
        console.log(`Hello ${this.name}`);
    }
    //num = how many times you want to repeat the function
    //increments weight and mood
    eat(num){
        for(let i = 1; i <= num; i++){
        this.weight++;
        this.mood++;
        }
    }
    //num = how many times you want to repeat the function
    //decrements the weight
    exercise(num){
        for(let i = 1; i <= num; i++){
        this.weight--;
        }
    }
    //num = how many times you want to repeat the function
    //increments age, height, weight
    //decrements mood
    //increases bankAccount by 10
    ageUP(num){
        for(let i = 1; i <= num; i++){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
        }
    }
    //Takes a parameter of class Hamster, and adds it to array hamsters
    //increments mood
    //reduces bankAccount by hamster price
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood++;
        this.bankAccount -= hamster.getPrice();
    }
}

//1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

//2.Age Timmy five years
timmy.ageUP(5);
console.log(`Timmy is now ${timmy.getAge()}`);

//3.At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);
console.log(`Timmy now weighs ${timmy.getWeight()}`);

//4.Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);
console.log(`Timmy now weighs ${timmy.getWeight()}`);

//5.Age Timmy 9 years
timmy.ageUP(9);
console.log(`Timmy is now ${timmy.getAge()}`);

//6.Create a hamster named "Gus"
const gus = new Hamster('Gus');

//7.Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";
console.log(`${gus.owner} now owns Gus!`);

//8.Have Timmy "buy" Gus
timmy.buyHamster(gus);
console.log(`Timmy has bought ${timmy.hamsters[0].name}`);

//9.Age Timmy 15 years
timmy.ageUP(15);
console.log(`Timmy is now ${timmy.getAge()}`);

//10. Have Timmy eat twice
timmy.eat(2);
console.log(`Timmy now weighs ${timmy.getWeight()}`);

//11.Have Timmy exercise twice
timmy.exercise(2);
console.log(`Timmy now weighs ${timmy.getWeight()}`);

//Chef Dinners

class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer =appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }

}

class Chef{

    createDinner(appetizer, entree, dessert){
        const newDinner =new Dinner(appetizer, entree,dessert);
        console.log(newDinner);
    }
}

const chef = new Chef();

chef.createDinner('mozzarella sticks', 'chicken parm', 'cheesecake');
chef.createDinner('dumplings', 'miso ramen', 'mochi');
chef.createDinner('chips and guac', 'steak burrito', 'cake');
