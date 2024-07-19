// this method

// Task-7 Add method  that uses the this keywork and return string

let greet = {
  name: "Ashish",
  education: "BCA",
  age: 20,
};

greet.hello = function () {
  console.log(`${this.name} hello welcome to are site 😊😊😊.`);
};

console.log(greet.hello());

// Object itration

// Task-8 use for-in loop for itration over the properties of book and log the each property and its value

const books = [
  { title: "science", author: "Albert einstine" },
  {
    title: "Maths",
    author: "Arya bhat",
  },
  {
    title: "Chemistry",
    author: "loki",
  },
];

for (titles of books) {
  console.log("Title.:", titles.title);
}

for (authors of books) {
  console.log("Author.:", authors.author);
}

// Task-9 use Object.keys amd object.values methods and log all the keys and values of books object

console.log("Keys.:", Object.keys(books));

books.forEach((book) => console.log("Keys data.:", Object.keys(book)));

console.log("values.:", Object.values(books));
