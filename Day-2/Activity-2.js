// Assignment Operators

// Task-6 use the += operator to add number to a variable and log the result.

function naturalSum(num) {
  sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log("Sum of natural number .:", sum);
}
naturalSum(10);

//Task-7 use the -= operator to add number to a variable and log the result.

let a = 10;
a -= 1;
console.log(a);
