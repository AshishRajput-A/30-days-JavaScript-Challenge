// Comparison Operators

// Task-8 wap to compare two number using > and < and log the result to the console.

let age = 19;

if (age > 18) {
  console.log("You are eligible for vote.");
} else if (age < 18) {
  console.log("You are not eligible for vote.");
} else {
  console.log("age is equla to 18");
}

// Task-9 wap to compare two number using >= and =< and log the result to the console.

let purchese = 5000;
let bill = 0;

if (purchese >= 2000) {
  let discount = 2000 / 20;

  bill = purchese - discount;
  console.log("Bill .:", bill);
} else if (purchese <= 2000) {
  console.log("Sorry we can't  give you any discount");
}
//  Task-10 wap to compare two number using == and === and log the result to the console.

let password = 1234;

if (password == 1234) {
  console.log("You login successfully.");
} else {
  console.log("Password is wrong.");
}

let username = "ashish";

if (username === "ashish") {
  console.log("You enterd right username.");
} else {
  console.log("You enterd wrong username.");
}
