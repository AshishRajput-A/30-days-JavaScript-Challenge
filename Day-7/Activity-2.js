// nested object

// Task-5 create a nested object represeting a library with properties like name and books (an array of book object),and log the library object.

const library = {
  name: "kalavati library",
  books: [
    { title: "science", author: "Albert einstine" },
    {
      title: "Maths",
      author: "Arya bhat",
    },
    {
      title: "Chemistry",
      author: "loki",
    },
  ],
};

console.log(library);

// Task-6 Access and log the name of the library and the title of all the books in the library

console.log("library.:", library.name);

const titlearray = library.books.map((book) => book.title);
console.log("All books title.:", titlearray);
