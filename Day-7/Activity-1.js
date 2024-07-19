// Object
// Object creation and access

//Task-1 create an object represeting a book with properties like title , author and year and log the object to the console.

let books = {
  title: "rich dad poor dad",
  author: "robart kiyosaki",
  year: 2020,
};
console.log("Object.:", books);

// Task-2 Access and log the title and author properties of the book object.

console.log("title", books.title);
console.log("author", books.author);

// Object Methods

// Task-3 Add a method to the book object that return a string with the book's title and author and log the result of calling this method.

books.print = function () {
  console.log("title .:", this.title);
  console.log("author name.:", this.author);
};

books.print();

// Task-4 Add a method to the book object that  takes parameter year and update the books property then log the updated object.

books.update = function (year) {
  console.log("Updated year.:", year);
};

books.update(2024);
