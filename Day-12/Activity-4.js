// Error Handling in promises

// Task-6 create a promise that randomly resolve or reject Use .catch() handle the rejection and log an approproate message to the console

function randomPromise() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("Promise resolved successfully.");
      } else {
        reject(new Error("Promise is rejected."));
      }
    }, 1000);
  });
}

randomPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log("Caught an error.:", error.message));
