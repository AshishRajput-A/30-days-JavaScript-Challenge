// Task-8 use promise.all to wait for multiple promises to resolve  and log all the values

/* The Promise.all method is used to wait for all three promises to resolve. Promise.all takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved.*/

/*async function getAllPromise() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolve promise-1"), 6000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolve promise-2"), 4000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolve promise-3"), 2000);
  });

  try {
    const data = await Promise.all([promise1, promise2, promise3]);
    console.log(data);
  } catch (error) {
    console.log("Error in promise all", error);
  }
}

getAllPromise();*/

// Task -9 use promise.race  to log the value of the first promise that resolve among multiple promise
/*The Promise.race method is used to wait for the first promise to resolve. Promise.race takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.*/
async function fetchFirstData() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from server 1"), 5000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from server 2"), 2000);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data from server 3"), 1500);
  });

  try {
    const firstResult = await Promise.race([promise1, promise2, promise3]);
    console.log("First data fetched:", firstResult);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchFirstData();
