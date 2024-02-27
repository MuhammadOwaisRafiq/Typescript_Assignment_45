let users: string[] = ["Admin", "Ali", "Abdullah", "Fatima", "Minal"];
for (let user of users)
  if (user === "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, Thankyou for logging in again`);
  }
