const remainder = require("remainder");

console.log("'4' / '2' = ", remainder("4", "2")); //=> 0
console.log("'2' / '4' = ", remainder("2", "4")); //=> 2

console.log("4 / 2 = ", remainder(4, 2)); //=> 0
console.log("2 / 4 = ", remainder(2, 4)); //=> 2

try {
  console.log(remainder(2));
} catch (e) {
  console.log("Correctly throws error for lack of args.");
}

try {
  console.log(remainder());
} catch (e) {
  console.log("Correctly throws error for lack of args.");
}
