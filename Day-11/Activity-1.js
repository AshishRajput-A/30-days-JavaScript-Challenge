// promises and async/await

// understanding gthe promises

// Task-1 create a promise that resolve with a message after 2 sec timeout and log the message to the console.
const onePromise = new Promise((res, rej) => {
  const user = { message: "Promise is resolve" };

  setTimeout(() => {
    console.log("User.:", user);
    res();
  }, 2000);
});

// Task-1 create a promise that reject with a message after 2 sec timeout and log the message to the console .catch()

const twoPromise = new Promise((resolve, reject) => {
  const error = true;

  setTimeout(() => {
    if (!error) {
      resolve({ message: "Promise-2 resolve successfully." });
    } else {
      reject({ message: "Promise-2 is rejected." });
    }
  }, 4000);
});

twoPromise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
