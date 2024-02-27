function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
  }
}

const magician: string[] = [  "Ali", "Owais", "Raza"];
show_magicians(magician);









function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Original list of magicians
const magicians: string[] = ["Ali", "Owais", "Raza"];

// Create a copy of the original list
const greatMagicians = makeGreat([...magicians]); // Use spread syntax for copying

// Show the original list
console.log("Original magicians:");
showMagicians(magicians);

// Show the list with modified names
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
