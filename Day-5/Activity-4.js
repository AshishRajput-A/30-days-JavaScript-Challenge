// function with perameter and default value

// Task-7 wap to function that takes two parameter and return their product. provide a default value for the seconf parameter

function product(p1, p2 = "you purchesh nothing.") {
  if (!p1) {
    console.log(p2);
  } else {
    console.log(p1, "buy successfully.");
  }
}
product();

// Task-8 wap to function that takes a person's name and age and return a greeting message. provide a default value for the age.

function greet(name, age) {
  console.log(`Hello mr.${name} 😊😊.`);
}

greet("Ashish", 19);
