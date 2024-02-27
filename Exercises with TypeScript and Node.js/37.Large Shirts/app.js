"use strict";
function make_Shirt(size = "large", text = "I love typescript") {
    console.log(`You have order a ${size}, shirt that say ${text}`);
}
make_Shirt();
make_Shirt("medium");
// Different Message
make_Shirt("small", "I need a big shirt to wear");
