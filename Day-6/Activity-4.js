// Array iteration

// Task-10  use a for loop to itrate over the array and log the each element to the console

const arr1 = ["ashish", "alok", "manish", "lokesh", "dipesh"];

console.log("Original array.:", arr1);

for (value of arr1) {
  console.log(value);
}

// Task-11 use the foreach method to iterate over the array and log the array to the console

const arr2 = [1, 2, 3, 4, 5];
console.log("Original array.:", arr2);
arr2.forEach((val) => console.log("value.:", val));
