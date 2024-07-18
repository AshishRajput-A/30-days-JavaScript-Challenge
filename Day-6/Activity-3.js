// Array methods (intermediates)

// Task-7 use the map method to create a new array where each number is doubled and log the new array.

const arr1 = [1, 2, 3, 4, 5];

const newarr1 = arr1.map((ele) => ele * ele);

console.log("map array.:", newarr1);

// Task -8 use the filter method to create a new array with only even numbers and log the new array.

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("original array.:", arr2);

const newarr2 = arr2.filter((ele) => ele % 2 == 0);

console.log("filter even number.:", newarr2);

// Task-9 use the reduce methos to calculate the sum of all numbers in the array and log the result

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("original array.:", arr3);

const newarr3 = arr3.reduce((acc, curr) => acc + curr);
console.log("Sum of array.:", newarr3);
