function make_shirt(
  size: string = "large",
  text: string = "I love typescript"
) {
  console.log(`You have order a ${size}, shirt that say ${text}`);
}

make_shirt();
make_shirt("medium");

// Different Message
make_shirt("small", "I need a big shirt to wear");
