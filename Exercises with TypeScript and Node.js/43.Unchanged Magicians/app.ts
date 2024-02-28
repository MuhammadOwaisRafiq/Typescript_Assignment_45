function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[], great_magicians: string[]) {
  magicians.forEach((magician, index) => {
    great_magicians[index] = "The Great " + magician;
  });
}

const magicians: string[] = ["Owais", "Rafiq", "Meraj"];

const great_magicians: string[] = [];

make_great(magicians, great_magicians);

show_magicians(magicians);
show_magicians(great_magicians);
