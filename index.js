const coffee_data = require('./coffee_data');

//prompt 2: print out an array of the drinks off of the menu

console.table(coffee_data);

//prompt 3: print an array of drinks that cost 5 and under.

let coffeeUnder5 = [];

//loop through the coffee data and add the drinks that cost 5 and under to the coffeeUnder5 array.

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].price <= 5) {
        coffeeUnder5.push(coffee_data[i]);
    }
}

console.table(coffeeUnder5);

//prompt 4: print an array of drinks that are priced at an even number.

let coffeeEven = [];

//loop through the coffee data and add the even numbered drinks to the coffeeEven array.

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].price % 2 === 0) {
        coffeeEven.push(coffee_data[i]);
    }
}

console.table(coffeeEven);

//prompt 5: print the total cost of all the drinks on the menu.

let totalCost = 0;

//loop through the coffee data and add the price to the totalCost array.

for (let i = 0; i < coffee_data.length; i++) {
    totalCost += coffee_data[i].price;
}

console.log(" The total cost of all the drinks on the menu is $" + totalCost);

//prompt 6: print an array of drinks that are seasonal on the menu.

let seasonal = [];

//loop through the coffee data and add the seasonal drinks to the seasonal array if the seasonal value is true.

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].seasonal === true) {
        seasonal.push(coffee_data[i]);
    }
}

console.table(seasonal);

//prompt 7: print an array of drinks that are seasonal add the string "with imported beans" after the item name.


let importedBeans = [];

// loop through the coffee data and add imported beans to the importedBeans array if the seasonal is true.

for (let i = 0; i < coffee_data.length; i++) {
    if (coffee_data[i].seasonal === true) {
        importedBeans.push(coffee_data[i].name + " with imported beans");
    }
}

console.table(importedBeans);