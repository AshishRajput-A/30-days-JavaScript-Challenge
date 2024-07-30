// Custom Error Objects

// Task-4 create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle in using a try-catch

/*class CustomError extends Error {
  constructor(message) {
    super(message);

    this.name = "customError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a CustomError.");
}

function handleCustomError() {
  try {
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.error("Caught a custom error", error.message);
    } else {
      console.error("Custom an unexpevted error", error);
    }
  }
}

handleCustomError();
*/

// Task-5 write a function that validates user input (eg. checking if a strnig is not empty) and throws a custom error is the validate fails. Handle the custom error using try-catch block.

class ValidateError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidateError("Input must be string or not empty.");
  }
  console.log("Input is valid", input);
}

function handleValidation() {
  const user = "Ashish";

  try {
    validateInput(user);
  } catch (error) {
    if (error instanceof validateInput) {
      console.log("Validate Error .:", error.message);
    } else {
      console.log("Unexpected Error.:", error);
    }
  }
}

handleValidation();
