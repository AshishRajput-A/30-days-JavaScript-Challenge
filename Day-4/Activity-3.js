// do...while loop

// Task-5 wap to print 1 to 5 using do while loop
let num = 1;

do {
  console.log(num);

  num++;
} while (num <= 5);

// Task-6 wap to calculate factorial of a number using do while

let result = 1;
let i = 1;
let n = 5;

do {
  result *= i;
  i++;
} while (i <= n);

console.log("Factorial.:", result);
