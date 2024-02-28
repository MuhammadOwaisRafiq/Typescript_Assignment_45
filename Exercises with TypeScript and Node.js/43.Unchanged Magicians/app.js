"use strict";
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians, great_magicians) {
    magicians.forEach((magician, index) => {
        great_magicians[index] = "The Great " + magician;
    });
}
const magicians = ["Owais", "Rafiq", "Meraj"];
const great_magicians = [];
make_great(magicians, great_magicians);
show_magicians(magicians);
show_magicians(great_magicians);
