//change value of a variable
let number = 0;
number = number + 1;
console.log(number);

let firstname = "yael";
let lastname = "lanir";
lastname = "chalfar";
console.log(firstname + " " + lastname);

let number1 = 9;
let number2 = 2;
let sum = number1 + number2;
console.log(sum);

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 9));

const changeLastName = function (newname) {
  lastname = newname;
  console.log(firstname + " " + lastname);
};

changeLastName("blabla");

const countTillNumber = function (num) {
  for (let index = 1; index <= num; index++) {
    console.log(index);
  }
};
//!CALL THE FUNCTION
//?CALL THE FUNCTION
//CALL THE FUNCTION
countTillNumber(20);

const isGreaterThanTen = function (num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
};
console.log(isGreaterThanTen(20));
