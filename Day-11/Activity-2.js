// create a sequence of promise that simulate fetching data from server chain the promise to log message in specific order.

const fetchData = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
    }, delay);

    resolve();
  });
};

fetchData("Data-1 getting from server 1000", 1000)
  .then(() => fetchData("Data-2 getting from server 3000", 3000))
  .then(() => fetchData("Data-3 getting from server 4000", 4000))
  .then(() => fetchData("Data-4 getting from server 2000", 2000));
