let arrayOne = [1, 2, 3];

const sumArray = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
};
console.log(sumArray([1, 2, 3]));

console.log(typeof "hello" === "string");
console.log(typeof 5 === "string");
console.log(typeof 5 === "number");
console.log(typeof true === "boolean");

//var a = [1,2,3];
//var sum = a.reduce(function(a, b) { return a + b; }, 0);
