// Enhanced object literals

// Task-8 use enhanced object literals to create an object with methods and properties and log the result

let data1 = {
  name: "Ashish",
  age: 20,

  education: function () {
    console.log(`My name is ${this.name}.`);
    console.log(`I am ${this.age} year old.`);
    console.log("I am BCA graduate.");
  },

  changenameage: function (name, age) {
    this.name = name;
    this.age = age;

    this.education();
  },
};

console.log(data1.name);
console.log(data1.education());
console.log(data1.changenameage("Ajay", 15));

// Task-9 create object with computed property names based on variables and log the object to the console.

const dynamicKey = "dynamicProperty";

let obj = {
  [dynamicKey]: "This is dynamic value ",

  staticProperty: "This is static value",

  getinfo: function () {
    return `Dynamic Property .: ${this[dynamicKey]}  ,Static Property: ${this.staticProperty}`;
  },
};

console.log(obj);

console.log(obj.getinfo());
