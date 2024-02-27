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
const magicians: string[] = ["alice", "bob", "charlie"];

// Create a copy of the original list
const greatMagicians = makeGreat([...magicians]); // Use spread syntax for copying

// Show the original list
console.log("Original magicians:");
showMagicians(magicians);

// Show the list with modified names
console.log("\nGreat magicians:");
showMagicians(greatMagicians);