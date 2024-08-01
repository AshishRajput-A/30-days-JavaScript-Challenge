// Task-3 Create a module that exports multiple functions using named exports. import and use these functions in another script.

function add(n1, n2) {
  return console.log("Addition.:", n1 + n2);
}

function sub(n1, n2) {
  return console.log("Subtraction.:", n1 - n2);
}

function multi(n1, n2) {
  return console.log("Multiplication.:", n1 * n2);
}

function div(n1, n2) {
  return console.log("division.:", n1 / n2);
}

module.exports = { add, sub, multi, div };
