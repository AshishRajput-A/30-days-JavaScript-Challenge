// Fetching data from of api

// Task-6 use the fetch API to fet data from public api and log the response data to the console using promise

// fetch("https://api.github.com/users/AshishRajput-A")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Task-7 use the fetch API to get data from a public API and log the response data to the console using async/await

async function getAPI() {
  url = "https://api.github.com/users/AshishRajput-A";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("Error in get fetch.:", error);
  }
}

getAPI();
