const getWordByNumber = (num) => {
  if (num < 1 || num > 10) {
    return "invalid";
  }
  if (num === 1) {
    return "one";
  }
  if (num === 2) {
    return "two";
  }
  if (num === 3) {
    return "three";
  }
  if (num === 4) {
    return "four";
  }
  if (num === 5) {
    return "five";
  }
  if (num === 6) {
    return "six";
  }
  if (num === 7) {
    return "seven";
  }
  if (num === 8) {
    return "eight";
  }
  if (num === 9) {
    return "nine";
  }
};

console.log(getWordByNumber(5));

//! Using a map
const numberToString = (num) => {
  const numbersMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  if (numbersMap[num]) {
    return numbersMap[num];
  } else {
    return "invalid";
  }
};
console.log(numberToString(5));

//! Using switch statement
const getStringByNumber = (num) => {
  switch (num) {
    case 1:
      "one";
      break;
    case 2:
      "two";
      break;
    case 3:
      "three";
      break;
    case 4:
      "four";
      break;
    case 5:
      "five";
      break;
    case 6:
      "six";
      break;
    case 7:
      "seven";
      break;
    case 8:
      "eight";
      break;
    case 9:
      "nine";
      break;

    default:
      "invalid";
      break;
  }
};
