/*const { addTwo } = require("./export-1.js");

const result = addTwo(15, 5);

console.log(`The sum of number ${result}`);*/

import { add } from "./export-1.mjs";
import { obj } from "./export-1.mjs";

const result = add(10, 10);

console.log("log.:", result);

console.log(obj);
