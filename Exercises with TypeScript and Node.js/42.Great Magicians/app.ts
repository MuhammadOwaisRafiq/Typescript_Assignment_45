function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

// const magician: string[] = ["Ali", "Owais", "Raza"];
// show_magicians(magician);

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " The Great";
  }
}

const magicians2: string[] = ["Ali", "Owais", "Raza"];
make_great(magicians2);
show_magicians(magicians2);
