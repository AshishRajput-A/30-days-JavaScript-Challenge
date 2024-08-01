// Modules
// Creating and exporting module

// Task-1  create a module that exports a function to add two numbers. import ans use this module in another script.

// Task-2 create a module that exports an object represeting a person with properties and methods. import and use this module in another script

/*function addTwo(n1, n2) {
  return n1 + n2;
}

module.exports = { addTwo };*/

export function add(n1, n2) {
  return n1 + n2;
}

export const obj = { name: "ashish", age: 20 };
