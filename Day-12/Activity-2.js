// Finally block

// Task-3 write a script the include a try-catch and a finally block. log message in the try catch and finally blocks to observe the execution flow

function data() {
  try {
    console.log("Try block in executed.:");
  } catch (error) {
    console.log("Execute catch block.:", error);
  } finally {
    console.log("Finally block executed.:");
  }
}

data();
