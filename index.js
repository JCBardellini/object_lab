// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.

// const carThree = {
//     wheels: 4,
//     owner : "John",
//     isBroken: false,
//     color: "red"
// }
// carThree.price = "$1"; // add this line using dot notation
// carThree["year"] = 1999; // we must put quotes while using bracket notation
// carThree.isBroken = true;
// carThree.owner // John

// let clientIsInterested;

// if(carThree.color === "blue") {
//     clientIsInterested = true;
// } else {
//     clientIsInterested = false;
// }

// delete carThree.owner
// console.log(carThree)
// console.log(clientIsInterested)

// Problem 2

// Declare a JS object called store with -
// A property called profit with a number value -
// A property called manager with a string value -
// A property called isOpenNow with a boolean value -
// A property called isVeryExpensive with a boolean value -
// Use dot notation to add a new property called location with a string value -
// Use bracket notation to add a new property called storeType with a string value- 
// Use dot notation to change the value of the isOpenNow property -
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.
 
// const store = {
//     profit: 500,
//     manager: "Alex",
//     isOpenNow: true,
//     isVeryExpensive: false
// }
// store.location = "Seattle";
// store["storeType"] = "Food";
// store.isOpenNow = false;
// store.isVeryExpensive

// let canShopHere;
// if (store.isOpenNow == true && store.isVeryExpensive == false) {
//     canShopHere = true
// } else {
//     canShopHere = false
// }
// delete store.profit
// console.log(canShopHere)
// console.log(store)

// Problem 3

// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.
 
// const home = {
//     rooms: 2,
//     bathrooms: 1,
//     isForSale: true,
//     isInGoodLocation: true,
// }
// home.price = 4512;
// home["year"] = 2023;
// home.isForSale = false;
// home.bathrooms

// let buyHouse;

// if (home.isInGoodLocation == true && home.isForSale == true) {
//     buyHouse = true;
// } else {
//     buyHouse = false;
// }

// console.log(buyHouse)
// console.log(home)

// Problem 4, 5

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.

// const restaurantsNearMe = {
//     sushi: true,
//     pizzaPlace: "Pizza Hut",
//     burgerPlace: "tarven Hall",
//     price: "decent"
// }
// restaurantsNearMe.good = true;
// restaurantsNearMe["eat"] = true;
// restaurantsNearMe.sushi = false;
// restaurantsNearMe.price;
// delete restaurantsNearMe.sushi
// let shouldEat;

// if (restaurantsNearMe.good == true && restaurantsNearMe.eat == true) {
//     shouldEat = "yes go eat"
// } else {
//     shouldEat ="no not good enough";
// }

// console.log(shouldEat)
// console.log(restaurantsNearMe)

const vacationPlan = {
    plan: true,
    total: "unknown",
    fly: false,
    drive: true
}
vacationPlan.ready = true;
vacationPlan["friends"] = "not sure"
vacationPlan.total = "$1000 per person"
delete vacationPlan.plan 

let letsTravel;

if (vacationPlan.ready == true && vacationPlan.drive == true) {
    letsTravel = `lets travel its only ${vacationPlan.total}`
} else {
    letsTravel = "sorry we can't do it yet"
}

console.log(vacationPlan)
console.log(letsTravel)

