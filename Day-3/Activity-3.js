// Switch case

// Task-4 wap that uses a switch case statement to determine day of the week based on a number (1-7)

const day = 3;

switch (day) {
  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  case 1:
    console.log("Sunday");
    break;

  default:
    console.log("Day's is less then 7");
}

// Task -5  wap that uses a switch case statement to  assign a grade (A,B,C,D,E) based on score

let marks = 75;

switch (true) {
  case marks > 90:
    console.log("Grade A");
    break;

  case marks >= 80 && marks < 90:
    console.log("Grade - B");
    break;

  case marks >= 70 && marks < 80:
    console.log("Grade - C");
    break;

  case marks >= 60 && marks < 70:
    console.log("Grade - D");
    break;

  case marks > 45 && marks < 60:
    console.log("Grade - E");
    break;

  default:
    console.log("Please enter proper marks.");
}
