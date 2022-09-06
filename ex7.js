const primeNumberFromOneToN = (n) => {
  let count = 0;
  for (let index = 2; index <= n; index++) {
    let isPrime = true;
    for (let index2 = 2; index2 < index; index2++) {
      if (index % index2 === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
};

console.log(primeNumberFromOneToN(100));
