"use strict";
let guestList = ["Imran", "Nawaz", "Abdullah"];
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guestList[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n"
//   );
// }
let absentGuest = "Imran";
let newGuest = "Kamran Tessori";
guestList[0] = newGuest;
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guestList[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n"
//   );
// }
console.log(`Mr. ${absentGuest} is not coming to the party.`);
console.log("Good News! We find Big Table so we are inviting 3 more guests.");
guestList.unshift("Sir Zia Khan");
guestList.splice(2, 0, "Hamza");
guestList.push("Jameel");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " +
        guestList[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n");
}
console.log("\nSorry we can not arrange big table , Only two Peoples will be invited. ");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry Mr. ${removeGuest}, You are not invited for dinner. `);
}
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Mr. " + guestList[i] + ",\n\nYou are still invited.\n\nThankyou!\n\n");
}
guestList.splice(0, 2);
console.log(guestList);
