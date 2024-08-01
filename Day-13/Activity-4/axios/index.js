const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts/3";

axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("Error.:", err));
