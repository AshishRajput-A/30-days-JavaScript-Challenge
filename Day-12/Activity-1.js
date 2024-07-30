// Error handling
// basic error handling in try-catch

// Task-1 write a function that intentionally throw an error and use try catch block to handle the error and log the appropriate message to the console.

/*function throwError() {
  throw new Error("This is some internal error.");
}

function data() {
  try {
    throwError();
  } catch (err) {
    console.log("Error.:", err);
  }
}

data();*/

// Task-2 create a function that devides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error

function throwErrors() {
  throw new Error("The devides number is zero.");
}

function devides(n1, n2) {
  let result = n1 / n2;

  if (result === 1) {
    throwErrors();
  } else {
    return console.log("Result.:", result);
  }
}

devides(12, 12);
