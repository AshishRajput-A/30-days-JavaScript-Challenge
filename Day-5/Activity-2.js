// function expression

// Task-3 wap to function expression to find the maximum of two number and log the result to the console.

let maximum = function (num1, num2) {
  if (num1 > num2) {
    return `${num1} is largest number`;
  } else if (num1 < num2) {
    return `${num2} is largest number`;
  } else {
    return `${num1} and ${num2} both are equals.`;
  }
};

console.log(maximum(16, 6));

// Task-4 wap to function expression to concatenate two string and return the result to the console.

const concat = function (str1, str2) {
  return `${str1 + str2}`;
};

console.log(concat("hello i am ashish.", "i like to play cricket."));
