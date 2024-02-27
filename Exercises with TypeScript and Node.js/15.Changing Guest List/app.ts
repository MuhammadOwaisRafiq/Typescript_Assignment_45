let guestList: string[] = ["Imran", "Nawaz", "Abdullah"];
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear Mr. " +
      guestList[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n"
  );
}

let absentGuest: string = "Imran";
let newGuest: string = "Kamran Tessori";

guestList[0] = newGuest;
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear Mr. " +
      guestList[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n"
  );
}

console.log(`Mr. ${absentGuest} is not coming to the party.`);
