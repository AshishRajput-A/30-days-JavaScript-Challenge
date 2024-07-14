//Logical operator

// Task-11 wap that use && operator to combine two conditions and log the result to the console .

let username = "ashish";
let password = 1111;

if (username === "ashish" && password === 1111) {
  console.log("user is login.");
} else {
  console.log("All feild are required.");
}

// Task-12 wap that use || operator to combine two conditions and log the result to the console .

let documentVerification = false;

id_1 = "Adharcard";
id_2 = "Pancard";

if (id_1 || id_2) {
  documentVerification = true;
  console.log("documentVerification ", documentVerification);
} else {
  console.log("documentVerification ", documentVerification);
}

// Task- 13 wap that use ! operator to combine two conditions and log the result to the console .

let user = "ashish";

if (!user) {
  console.log("User is required");
} else {
  console.log("Every thing is right.");
}
