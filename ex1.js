const isTen = (a, b) => {
  if (a + b === 10) {
    return "makes 10";
  } else {
    return "nope";
  }
};
console.log(isTen(2, 9));
