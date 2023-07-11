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

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }

    eat(num){
        for(let i = 1; i <= num; i++){
        this.weight++;
        this.mood++;
        }
    }

    exercise(num){
        for(let i = 1; i <= num; i++){
        this.weight--;
        }
    }

    ageUP(num){
        for(let i = 1; i <= num; i++){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
        }
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood++;
        this.bankAccount -= hamster.getPrice();
    }

    repeatFunc(num, func){
        for(let i = 1; i <= num; i++){
            func;
        }
    }
}

//1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

//2.Age Timmy five years
timmy.ageUP(5);
console.log(timmy.getAge());

//3.At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);
console.log(timmy.getWeight());

//4.Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);
console.log(timmy.getWeight());

//5.Age Timmy 9 years
timmy.ageUP(9);
console.log(timmy.getAge());

//6.Create a hamster named "Gus"
const gus = new Hamster('Gus');

//7.Set Gus's owner to the string "Timmy"
gus.owner = "Timmy";

//8.Have Timmy "buy" Gus
timmy.buyHamster(gus);

//9.Age Timmy 15 years
timmy.ageUP(15);
console.log(timmy.getAge());

//10. Have Timmy eat twice
timmy.eat(2);
console.log(timmy.getWeight());

//11.Have Timmy exercise twice
timmy.exercise(2);
console.log(timmy.getWeight());