//Arrow function

// Task-5 wap arrow function to calculate sum of two numbers

const sumOfNumber = (n1, n2) => {
  return `sum .: ${n1 + n2}`;
};
console.log(sumOfNumber(19, 11));

// Task-6 wap arrow function to check if a string contains a specific character and return boolean value

const contain = (value, char) => {
  if (value.includes(char)) {
    return true;
  } else {
    return false;
  }
};

console.log(contain("Ashish", "A"));
console.log(contain("vinod", "B"));
