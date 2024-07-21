// Spread and rest operators

// Task-5 use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console

const arr1 = [11, 12, 13, 14, 15];

const arr2 = [16, 17, 18, 19, 20];

const newarr = [...arr1, ...arr2];

console.log(newarr);

// Task-6 use the rest operator in a function to accept an arbitry nnumber of arguments and sum them return the result.

function sum(...number) {
  return number.reduce((total, num) => total + num, 0);
}

console.log("Sum.:", sum(1, 2, 3, 4, 5));
