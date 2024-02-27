"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Ali", "Owais", "Raza"];
show_magicians(magician);
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Original list of magicians
const magicians = ["Ali", "Owais", "Raza"];
// Create a copy of the original list
const greatMagicians = makeGreat([...magicians]); // Use spread syntax for copying
// Show the original list
console.log("Original magicians:");
showMagicians(magicians);
// Show the list with modified names
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
