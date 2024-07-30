// Gracefull error handling in fetch

// Task-8  use the fetch API to request data from an invalid URL and handle the error using  .catch() log an appropriate error message to the console.

/*function fetchData() {
  return fetch("https://api.github.com/users/AshishRajput-")
    .then((response) => response.json())
    .then((data) => console.log("Data.:", data))
    .catch((error) => console.log("Error.:", error));
}

fetchData();
*/

// Task-9 use the fetch API to request data from an incalid url within an async function and handle the error using try-catch log an appropritate error message.

async function data() {
  url = "https://api.github.com/users/AshishRajput-A";
  try {
    const response = await fetch(url);
    const datas = await response.json();
    console.log("Data.:", datas.login);
  } catch (error) {
    console.log("Async fetch error.:", error);
  }
}

data();
