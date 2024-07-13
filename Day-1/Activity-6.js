// task-1 wap that declares variables of different data types and logs both the value and type of each variable to the console

const name = "Javascript is my favourite  language ";
console.log("String.:", name, "==>", "Typeof", typeof name);

const age = 20;
console.log("Number.:", age, "==>", "Typeof", typeof age);

const pass = true;
console.log("Boolean.:", pass, "==>", "Typeof", typeof pass);

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
console.log("Array.:", days, "==>", "Typeof", typeof days);

const obj1 = { name: "javascript", work: "full stack development" };
console.log("Object.:", obj1, "==>", "Typeof", typeof obj1);

const add = () => {
  console.log("hii i am function");
};

console.log("Function.:", add, "==>", "Typeof ", add);
