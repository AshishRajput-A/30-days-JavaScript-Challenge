// Understanding the  Closures

// Task-1 Write a function that return another function where the inner function accesses a variable from the outer function's scop, call the inner function and log the result

function outerfunction(outerval) {
  function innerfunction() {
    return `Outer values ${outerval}`;
  }
  return innerfunction;
}

const myfunc = outerfunction("lokesh");

console.log(myfunc());

// Task-2 Create a closure that maintains a private counter. Implement functions to increment and get the current value the counter

function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },

    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue());
