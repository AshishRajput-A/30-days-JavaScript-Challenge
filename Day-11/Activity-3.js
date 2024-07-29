// Using Async/Await

// Task-4 write an async function that waits for promise to resolve and then log the resolved value

const onePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise is resolved");
  }, 2000);
});

const logResolvedValue = async (promise) => {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log("Error in primise.:", error);
  }
};

logResolvedValue(onePromise);

// Task-5 write an async function that habdle a rejetected promise using try-catch and log the error message

const twoPromise = new Promise((resolve, reject) => {
  let error = true;

  if (!error) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected ");
  }
});

const LogPromiseVlaue = async (promise) => {
  try {
    const result = promise;
    console.log(result);
  } catch (error) {
    console.log("Error in promise.:", error);
  }
};
