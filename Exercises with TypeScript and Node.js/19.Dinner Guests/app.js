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
// console.log(`Mr. ${absentGuest} is not coming to the party.`);
// console.log("Good News! We find Big Table so we are inviting 3 more guests.");
// array me 3 guest add kiye hain//
guestList.unshift("Sir Zia Khan");
guestList.splice(2, 0, "Hamza");
guestList.push("Jameel");
// yahan pr mene 6 guest ko print kraya hai//
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       guestList[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThankyou!\n\n"
//   );
// }
// Sorry Guest for Not Inviting//
// console.log(
//   "\nSorry we can not arrange big table , Only two Peoples will be invited. "
// );
// Yahan pr Hamne Guest Remove kiye Hain//
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    //   console.log(`Sorry Mr. ${removeGuest}, You are not invited for dinner. `);
}
// Hamare Bache Hue 2 Invited Guest//
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     "Dear Mr. " + guestList[i] + ",\n\nYou are still invited.\n\nThankyou!\n\n"
//   );
// }
// Mene Sare Guest Array Se Remove Krdiya //
guestList.splice(0, 2);
console.log(guestList);
//EXERCISE 19 //
//print a message indicating the number of people you are inviting to dinner.//
console.log(`Total number of guest are: ${guestList.length} `);
