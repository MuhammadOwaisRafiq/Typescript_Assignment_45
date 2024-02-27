"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Corolla", {
    color: "Silver",
    year: "2024",
});
console.log(myCar);
