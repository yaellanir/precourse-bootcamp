const divideOrHasSeven = (start, end) => {
  let count = 0;
  for (let index = start; index <= end; index++) {
    if (index % 7 === 0 || index.toString().includes("7")) {
      count++;
    }
  }
  return count;
};
divideOrHasSeven(1, 20);
