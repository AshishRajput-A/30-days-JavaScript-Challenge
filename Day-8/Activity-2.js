// Destructuring

// Task-3 use destructuring to extract the first and second elements from an array of number and log them to console.

const arr1 = [10, 20, 30, 40, 50];

const [first, second] = arr1;

console.log("first element.:", first);
console.log("second element.:", second);

// Task-4 use object destructuring to extract the title and authoe from  a object and log them

const book = {
  title: "rich dad poor dad",
  author: "robert kiyosaki",
  published: 2010,
};

const { title, author } = book;

console.log("title.:", title);
console.log("author.:", author);
