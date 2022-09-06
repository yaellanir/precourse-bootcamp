const biggestNumber = (a, b, c) => {
  let sortednumbers = [a, b, c].sort();
  return sortednumbers[2];
};
console.log(biggestNumber(2, 9, 1));
