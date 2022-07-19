let crusts = ['deep dish', 'double dough', 'cracker crust', 'hand tossed', 'stuffed crust'];
let sauces = ['marinara', 'bbq', 'pesto', 'alfredo'];
let cheeses = ['feta', 'mozzarella']
let toppings = ['sausage', 'pepperoni', 'chicken', 'chicken nuggets'];

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    let crust_choice = crusts[getRandomInt(crusts.length)];
    let sauce_choice = sauces[getRandomInt(sauces.length)];
    let cheese_choice = cheeses[getRandomInt(cheeses.length)];
    let topping_choice = toppings[getRandomInt(toppings.length)];

    return pizzaOven(crust_choice, sauce_choice, cheese_choice, topping_choice);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let pizza = pizzaOven('deep dish', 'traditional', ["mozzarella"], ["pepperoni", "sausage"]);
let pizza2 = pizzaOven('hand tossed', 'marinara', ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let pizza3 = pizzaOven('double dough', 'marinara', ["mozzarella"], ["pepperoni", "sausage", "mushrooms"]);
let pizza4 = pizzaOven('cracker', 'bbq', ["mozzarella"], ["chicken nuggets"]);
let pizza5 = randomPizza();

console.log(pizza5);