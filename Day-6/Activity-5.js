// Multi dimension array

// Task-12 create a two dimensional array (matrix) and log the result

const row = 3;
const col = 4;
const matrix = [];

for (let i = 0; i < row; i++) {
  matrix[i] = [];
  for (let j = 0; j < col; j++) {
    matrix[i][j] = i * col + j + 1;
  }
}

console.log(matrix);

// Task-13 access the log specific element from two dimensional array

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(array1[0][2]); // 3

console.log(array1[2][1]); //8

console.log(array1[1][1]); //5
