/* Practice arrays and objects using the classic game Oregon Trail.
Create two different types of objects: a traveler and a wagon.
A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).
A wagon has a few properties as well: a passengers list (array) and a capacity (number). 
*/

/*
let traveler1 = {
    amount: 100, 
    name: 'Henrietta', 
    isHealthy: true, 
}; 

let traveler2 = {
    amount: 150, 
    name: 'Juan',
    isHealthy: true,
}; 

let wagon = {
    passengers: [],
    capacity: 5, 
}; 
*/

function makeTraveler(name) {
    return {
        name: name,
        amount: 100, 
        isHealthy: true, 
    }; 
}

let Henrietta = makeTraveler('Henrietta');
let Juan = makeTraveler('Juan'); 

console.log(Henrietta);
console.log(Juan); 

function makeWagon(capacity) {
    return {
        capacity: capacity, 
        passengers: [], 
    }; 
} 

let wagon = makeWagon(5);
console.log(wagon); 

function hunt(traveler) { //they have a 50% chance of successful hunt, if they do it increases amount by 100, if not then it increases by 0
    if (Math.random() > 0.5) {
        traveler.amount = traveler.amount + 100;
        return 'successful hunt';
    } else {
        traveler.amount = traveler.amount + 0;
        return 'unsuccessful hunt';
    }
}

hunt(Henrietta); 
hunt(Juan); 
console.log(Henrietta);
console.log(Juan); 

function eat(traveler) { //Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

 if (traveler.amount > 20) {
  traveler.amount = traveler.amount - 20;
  } else {
     traveler.isHealthy = false;
 }
}

eat(Henrietta);
eat(Juan); 
console.log(Henrietta);
console.log(Juan); 

function join(wagon, traveler) {
    if (wagon.capacity > 0) { // do not need a loop because it will only happen once
        wagon.passengers.push(traveler); 
        wagon.capacity -= 1; //takes a passanger spot away after a new traveler is added
        return true;
    } else {
        return false;
    }
}

if (join(wagon, Henrietta)) {
    console.log("added to wagon!!!!")
}
join(wagon, Juan); 
console.log(Henrietta);
console.log(Juan); 
console.log(wagon); 

function quarentine(wagon) { //Return true if there is at least one unhealthy person in the wagon. Return false if not.
    for (let i = 0; i < wagon.passengers.length; i++) {
        if (wagon.passengers[i].isHealthy === false) {
            return true;
        }
    }
    return false; // if this was in the for loop it would have returned false after only one passenger, outside of the loop to run the whole thing
}

console.log(quarentine(wagon));

function food(wagon) {
    let totalFood = 0;

    for(let i = 0; i < wagon.passengers.length; i++) {
        totalFood += wagon.passengers[i].amount; 
        console.log("passenger: ", i, wagon.passengers[i].amount); 
        console.log("totalFood: ", totalFood); 
    }
    return totalFood; 
}

console.log(food(wagon));

