// Practical closures

// Task-3 write a function that generates unique ids.use a closure to keep track of the last generate ID and increment it with each call.

function generateID() {
  let id = 0;

  return function () {
    id = Math.floor(Math.random() * 20 + 1);
    return id;
  };
}

const myfunc = generateID();

console.log(myfunc());
console.log(myfunc());
console.log(myfunc());

// Task- 4 create a closure  that captures a user's name return a function that greets the user by name

function greet(name) {
  return function () {
    return `hello Mr.${name} good morning.`;
  };
}

const myfunc1 = greet("Ashish");
console.log(myfunc1());

const myfunc2 = greet("Vijay");
console.log(myfunc2());
