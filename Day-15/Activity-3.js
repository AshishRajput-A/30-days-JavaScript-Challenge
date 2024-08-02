// Closure in loops

// Task-5 write a loop that created an array of functions. each function should log its index when called. use a closure to ensure each function logs the correct index.

function createFunctionArray() {
  const functionArray = [];

  for (let i = 1; i <= 10; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }
  return functionArray;
}

const functions = createFunctionArray();

functions.forEach((func) => func());
