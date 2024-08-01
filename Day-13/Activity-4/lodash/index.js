const lodash = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chunkedKey = lodash.chunk(arr, 4);

console.log(chunkedKey);
