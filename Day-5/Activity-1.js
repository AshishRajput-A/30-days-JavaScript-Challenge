// Function

//Task -1 wap function to check if a number is even or odd and log the result to console.

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log(num, "is even.");
  } else {
    console.log(num, "is odd.");
  }
}

checkEvenOdd(13);

// Task-2 wap to function to calculate square of a number and retuern to the console.

function FindSquare(num) {
  return num * num;
}

console.log("Square.:", FindSquare(10));
