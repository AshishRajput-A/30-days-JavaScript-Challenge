// Default parameters

// Task-7 write a function that takes two parameters and return their prodcut, with the second parameter having  default value of 1. log the result of calling this function with and without the second parameter.

function data(para1, para2 = "i am default value") {
  //   console.log(para1);
  //   console.log(para2);
  return [para1, para2];
}

// data("Ashish ", "i like to play");

// data("Lokesh");

console.log(data("Ashish ", "i like to play"));
console.log(data("Lokesh"));
