//Higher order function

// Task -9 wap to higher order fun that takes a function and number and call the function that many times.

function greet() {
  console.log("Hello GoodMornign ☀️☀️");
}

function HigherFun(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

HigherFun(greet, 2);

// Task-10 wap to hof that takes two function and two value and applies the first function to the value and then applies the second function to the result.

const composeFun = (fun1, fun2, val1, val2) => {
  const intermediateResult = fun1(val1);

  return fun2(intermediateResult, val2);
};

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const result = composeFun(add, multiply, 2, 3);

console.log(result);
