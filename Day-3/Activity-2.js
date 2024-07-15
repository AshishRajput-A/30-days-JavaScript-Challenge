// nested if else

// Task-3 wap to find largest number of three numbers using nested if-else statement.

let a = 51,
  b = 210,
  c = 29;

if (a > b) {
  if (a > c) {
    console.log("a is largest number", a);
  }
} else if (b > c) {
  if (b > a) {
    console.log("b is largest number", b);
  }
} else {
  console.log("c is largest number", c);
}
