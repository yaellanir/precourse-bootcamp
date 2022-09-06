const factorialOf = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    console.log(`${factorial} x ${i}`);
    factorial = factorial * i;
    console.log(factorial);
  }
  return factorial;
};
console.log(factorialOf(5));
