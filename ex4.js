const countOddFromZeroToNum = (num) => {
  let countOfOdds = 0;
  for (let index = 0; index <= num; index++) {
    if (index % 2 > 0) {
      countOfOdds += 1;
    }
  }
  return countOfOdds;
};
console.log(countOddFromZeroToNum(3));
