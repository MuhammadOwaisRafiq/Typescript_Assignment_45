"use strict";
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy your sandwich OWAIS KHAN");
sandwich("Capsicum", "Tomato", "Chicken");
sandwich("Garlic", "Cheese");
sandwich("Beef", "Mayo sauce");
